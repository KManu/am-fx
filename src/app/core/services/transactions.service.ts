import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLS } from './constants.service';
import { retry, map, catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(
    public http: HttpClient
  ) { }

  errorHandler(title = 'Failed', text = 'There was an error. Wait a moment and try again.') {
    return of({
      status: false,
      title: title,
      message: text
    });
  }


  public createTransaction(payload) {
    return this.http.post(URLS.currencyPairs.create, {transaction: payload})
      .pipe(
        map((res) => {
          return {
            status: res['status'] || true,
            title: 'Successful',
            data: res['data']
          };
        }),
        catchError((err: any) => {
          console.log('Login http Error: ', err.error);
          return this.errorHandler('Network Error', err.message);
        })
      ).toPromise().then(res => res);
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
