import { Injectable } from '@angular/core';
import { URLS } from '../../core/services/constants.service';
import { HttpClient } from '@angular/common/http';
import { retry, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(
    private http: HttpClient
  ) { }

  errorHandler(title = 'Failed', text = 'There was an error. Wait a moment and try again.') {
    return of({
      status: false,
      title: title,
      message: text
    });
  }



  createCustomer(payload) {
    return this.http.post(URLS.customers.create, { customer: payload })
      .pipe(
        retry(3),
        map((res: any) => {
          if (res.status === true) {
            return {
              status: true,
              title: 'Successful',
              data: res.data
            };
          } else {
            return {
              status: false,
              title: 'Failed'
            };
          }
        }),
        catchError((err: any) => {
          console.log('Login http Error: ', err.error);
          return this.errorHandler('Network Error', err.message);
        })
      ).toPromise().then(res => res);
  }

  getCustomerDetailsById(payload) {
    return this.http.post(URLS.customers.getByID, { customer: payload })
      .pipe(
        retry(3),
        map((res: any) => {
          if (res.status === true) {
            return {
              status: true,
              title: 'Successful',
              data: res.data
            };
          } else {
            return {
              status: false,
              title: 'Failed'
            };
          }
        }),
        catchError((err: any) => {
          console.log('Login http Error: ', err.error);
          return this.errorHandler('Network Error', err.message);
        })
      ).toPromise().then(res => res);
  }


}
