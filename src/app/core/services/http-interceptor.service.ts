import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { LocalStorage, JSONSchemaString } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { flatMap, catchError } from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  private token: string;
  private re = /login/gi;


  constructor(
    private localStorage: LocalStorage
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // make sure request isnt from login
    if (req.url.search(this.re) === -1) {
      // retrieve token first
      return this.getToken()
        .pipe(
          flatMap(e => {
            // this.token = e;
            const modified = req.clone({ setHeaders: { 'Authorization': (e || '') } });
            return next.handle(modified);
          }),
          catchError((err: any) => {
            // pass request on unmodified
            return next.handle(req);
          })
        );
    } else {
      return next.handle(req);
    }


  }

  getToken() {
    const schema: JSONSchemaString = { type: 'string' };
    return this.localStorage.getItem<string>('token', { schema });
  }
}
