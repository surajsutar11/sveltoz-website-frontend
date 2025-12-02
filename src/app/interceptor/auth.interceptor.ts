// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     const token = localStorage.getItem('token');

//     const modifiedReq = req.clone({
//       setHeaders: token ? { Authorization: `Bearer ${token}` } : {}
//     });

//     return next.handle(modifiedReq);
//   }
// }
