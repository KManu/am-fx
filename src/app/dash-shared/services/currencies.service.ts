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


  /**
   * Returns the organisation currencies for a given user of the organisation
   * @param user.id user id
   * @param user.organisation.code user orgainsation code
   */
  getCurrenciesByOrg(user) {
    return this.http.post(URLS.currencies.getByOrg, { user: user })
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

  /**
   * Create new currency option for a given organisation
   * @param payload.user.id user id
   * @param payload.user.organisation.code user orgainsation code
   * @param payload.currency.name
   * @param payload.currency.rate
   * @param payload.currency.code
   * @param payload.currency.organisation_code
   * @param paylaod.currency.user_id
   * @param payload.currency.stock
   * @param payload.currency.buying_rate
   * @param payload.currency.selling_rate
   * @param payload.currency.deleted
   */
  upsert(payload) {
    return this.http.post(URLS.currencies.upsert, { user: payload.user, currency: payload.currency })
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
