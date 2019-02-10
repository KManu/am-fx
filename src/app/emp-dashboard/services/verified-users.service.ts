import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { map, catchError, retry, switchMap } from 'rxjs/operators';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { URLS } from '../../core/services/constants.service';
import { StateService } from '../../core/services/state.service';


@Injectable({
  providedIn: 'root'
})
export class VerifiedUsersService {

  constructor(
    private http: HttpClient,
    private stateService: StateService,
    private localStorage: LocalStorage
  ) { }

  getVerifiedUsers() {
    return this.http.get(URLS.verified_users.getVerifiedUsers)
      .pipe(
        map((res) => {
          // console.log(res);
          return this.localStorage.setItem('mazdash-verified', res).subscribe(() => { });
        }),
        map((res) => {
          return true;
        }),
        catchError((err: any) => {
          console.log('Login http Error: ', err.error);
          return throwError(err);
        })
      );
  }
}
