import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URLS } from '../../core/services/constants.service';
import { retry, map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class OrganisationsService {
  constructor(public http: HttpClient, public toastr: ToastrService) {}

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
      this.toastr.error(error.error, 'Failed.');
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  createOrganisationRequest(payload) {
    const url = URLS.organisation.createOrganisation;
    return this.http
      .post(url, { org: payload })
      .pipe(
        retry(3),
        map(res => {
          return res;
        }),
        catchError(this.handleError)
      )
      .toPromise();
  }

  getOrganisationsRequest() {
    return this.http
      .get(URLS.organisation.getAll)
      .pipe(
        retry(3),
        map(res => {
          return res;
        }),
        catchError(this.handleError)
      )
      .toPromise();
  }

  createOrganisation(payload) {
    return new Promise((resolve, reject) => {
      this.createOrganisationRequest(payload)
        .then(code => {
          resolve(code);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  getOrganisations() {
    return new Promise((resolve, reject) => {
      this.getOrganisationsRequest()
        .then(next => {
          resolve(next);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  getOrgNameAndCode() {
    return this.http
      .get(URLS.organisation.getNameAndCodes)
      .pipe(
        retry(3),
        map(e => {
          return e;
        }),
        catchError(this.handleError)
      )
      .toPromise();
  }
}
