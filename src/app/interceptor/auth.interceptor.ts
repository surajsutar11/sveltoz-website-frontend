import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private isTokenExpiredToastShown = false;

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

  //    const token = localStorage.getItem('token');

  // // ✅ Attach token if exists
  // if (token) {
  //   request = request.clone({
  //     setHeaders: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   });
  // }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error.status === 401) {

          // Show toast only once
          if (!this.isTokenExpiredToastShown) {
            this.isTokenExpiredToastShown = true;
            this.toastr.error(
              'Your session has expired. Please login again.'
            );
          }

          // Clear auth data
          localStorage.clear();

          // Redirect to login
          this.router.navigate(['/admin-panel']).then(() => {
            // reset flag after navigation
            this.isTokenExpiredToastShown = false;
          });
        }

        return throwError(() => error);
      })
    );
  }
}
