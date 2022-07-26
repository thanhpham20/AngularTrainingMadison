import { Injectable } from '@angular/core';
import { catchError, delay } from 'rxjs/operators';
import {
  HttpHeaders,
  HttpErrorResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Loading } from '../services/loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class ServerHttpService implements HttpInterceptor {
  // public httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     // Authorization: 'my-auth-token',
  //     // Authorization: 'Basic ' + btoa('username:password'),
  //   }),
  // };
  public REST_API_SERVER = 'http://localhost:3000';
  private totalRequests = 0;
  constructor(private loading: Loading) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loading.show();
    this.totalRequests++;
    const authReq = request.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'my-auth-token',
        // Authorization: 'Basic ' + btoa('username:password'),
      }),
    });

    return next.handle(authReq).pipe(
      delay(1500),
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          this.loading.hide();
        }
      }),
      catchError(this.handleError)
    );
  }
  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
