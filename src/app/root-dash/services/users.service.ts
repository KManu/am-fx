import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URLS } from '../../core/services/constants.service';
import { retry, map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      this.toastr.error(
        'Please check your network connection and try again in a moment.',
        'Connection Error'
      );
      return throwError('Network Error');
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
      this.toastr.error('Something bad happened; please try again later.', 'Failed.');
      return throwError(error);
    }
  }

  createUser(payload) {
    return this.http
      .post(URLS.users.create, { user: payload })
      .pipe(
        retry(3),
        map(res => {
          return res;
        }),
        catchError(this.handleError)
      )
      .toPromise();
  }

  getUsersByOrg(orgCode){
    return this.http.post(URLS.users.getByOrg, {org: orgCode})
    .pipe(
      retry(3),
      map(res => {
        return res['data'];
      }),
      catchError(this.handleError)
    ).toPromise();
  }

}
