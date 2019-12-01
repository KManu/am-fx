import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { map, catchError, retry, flatMap, switchMap } from 'rxjs/operators';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { URLS, KEYS } from '../core/services/constants.service';
import { StateService } from '../core/services/state.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private stateService: StateService,
    private localStorage: LocalStorage
  ) {}

  login(payload) {
    let user;
    return this.http.post(URLS.users.login, payload).pipe(
      map(res => {
        console.log(res);
        if (res['status'] === false) {
          throwError(false);
        } else {
          user = res['data'];
          return res;
        }
      }),
      switchMap(res => {
        return this.localStorage.setItem(KEYS.authToken, res['token']);
      }),
      switchMap(res => {
        return this.localStorage.setItem(KEYS.userData, user);
      }),
      map(res => {
        return {
          org: user.organisation || '',
          role: user.role || ''
        };
      }),
      catchError((err: any) => {
        console.log('Login http Error: ', err.error);
        return throwError(err);
      })
    );
  }
}
