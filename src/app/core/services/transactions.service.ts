import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLS, KEYS } from './constants.service';
import { retry, map, catchError, switchMap } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(
    public http: HttpClient,
    public localStorage: LocalStorage,
  ) { }

  errorHandler(title = 'Failed', text = 'There was an error. Wait a moment and try again.') {
    return of({
      status: false,
      title: title,
      message: text
    });
  }

  getUserPayload() {
    return this.localStorage.getItem(KEYS.userData)
      .pipe(
        map((userData: any) => {
          console.log(userData)
          return {
            _id: userData._id,
            org: userData.organisation._id,
          };
        })
      );
  }


  public createTransaction(payload) {
    return this.getUserPayload()
      .pipe(
        switchMap((userData: any) => {

          return this.http.post(URLS.transactions.create, { transaction: payload, user: userData });
        }),
        map((res) => {
          return {
            status: res['status'] || true,
            title: 'Successful',
            data: res['data']
          };
        }),
        catchError((err: any) => {
          console.log('Error: ', err);
          return this.errorHandler('Network Error', err.message);
        })
      ).toPromise().then(res => res);
    /*  return this.http.post(URLS.currencies.create, {transaction: payload})
       .pipe(
         map((res) => {
           return {
             status: res['status'] || true,
             title: 'Successful',
             data: res['data']
           };
         }),
         catchError((err: any) => {
           console.log('Error: ', err);
           return this.errorHandler('Network Error', err.message);
         })
       ).toPromise().then(res => res); */
  }

  public getOrgTransactions(payload) {
    return this.http.post(URLS.transactions.getOrgTransactions, payload)
      .pipe(
        retry(3),
        map(res => {
          return res;
        }),
        catchError(error => {
          return throwError(error);
        })
      );
  }

  public getUserTransactions(payload) {
    return this.http.post(URLS.transactions.getUserTransactions, payload)
      .pipe(
        retry(3),
        map(res => {
          return res;
        }),
        catchError(error => {
          return throwError(error);
        })
      );
  }

}
