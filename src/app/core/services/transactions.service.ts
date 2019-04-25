import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLS } from './constants.service';
import { retry, map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(
    public http: HttpClient
  ) { }

  public createTransaction(payload) {
    return this.http.post(URLS.transactions.create, payload)
      .pipe(
        retry(3),
        map(res => {
          console.log('Response on create transaction: ', res);
        }),
        catchError(err => {
          return throwError(err);
        })
      ).toPromise();
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
