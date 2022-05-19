import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ServiceService } from 'src/app/service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  jwtHelper = new JwtHelperService();
  constructor(public ser: ServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(req)
    if (localStorage.getItem('token')) {
      if (req.url.indexOf('refresh') > -1) {
        return next.handle(req)
      }
      let exp = localStorage.getItem('expiration')
      let token = localStorage.getItem('token')
      console.log(token)
      console.log("above is the token")

      let refreshToken = localStorage.getItem('refresh')

      const date = new Date(0)
      console.log(Date.now())
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(Number(exp) * 1000)
      if (Date.now() < Number(exp) * 1000) {
        console.log("hi inside 1st loop")
        let tokenizedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        })
        return next.handle(tokenizedReq)
      }
      return this.ser.RefreshToken(refreshToken)
        .pipe(
          switchMap((newToken: any) => {
            console.log(newToken)
            console.log("new token is getting added")
            localStorage.setItem('token', newToken.token);
            localStorage.setItem('refresh', newToken.refresh)
            const decryptedUser = jwt_decode(newToken.token);
            console.log(Object(decryptedUser).exp);
            console.log("decrypted User is above")
            console.log(newToken)
            console.log("hi inside 2nd loop")
            localStorage.setItem('expiration', Object(decryptedUser).exp)
            let tokenizedReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${newToken.token}`
              }
            })
            return next.handle(tokenizedReq)

          })
        )

    }
  else{
    return next.handle(req)
  }
  }
}
