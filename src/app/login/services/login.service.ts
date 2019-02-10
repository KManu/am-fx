import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { map, catchError, retry, flatMap } from 'rxjs/operators';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { URLS } from '../../core/services/constants.service';
import { StateService } from '../../core/services/state.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private stateService: StateService,
    private localStorage: LocalStorage
  ) { }


  login(payload) {
    /* {username: "admin", password: "12345"} */
    if (payload.username === 'admin' && payload.password === '12345') {
      return of({ user: 'admin' });
    } else if (payload.username === 'kwaku' && payload.password === 'abcde') {
      return of({ user: 'teller' });
    } else {
      return throwError(false);
    }
    /* return this.http.post(URLS.login.loginURL, payload)
      .pipe(
        map((res) => {
          console.log(res);
          if (res['status'] === true) {
            this.localStorage.setItem('token', res['token']).subscribe(() => { });
          }
          return true;
        }),
        catchError((err: any) => {
          console.log('Login http Error: ', err.error);
          return throwError(err);
        })
      ); */
  }
}
