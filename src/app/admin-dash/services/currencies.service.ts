import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../../core/services/constants.service';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(
    public http: HttpClient
  ) { }

  getCurrencies() {
    return this.http.get(URLS.currencies.get)
      .pipe(
        map((res) => {
          return res['data'];
        }),
        catchError((err: any) => {
          console.log('Login http Error: ', err.error);
          return throwError(err);
        })
      ).toPromise();
  }
}
