import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "@shared/models/user";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  currentUser: User;

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const credential = JSON.parse(localStorage.getItem("credential"));
    if (credential.wc.id_token) {
      request = request.clone({
        setHeaders: {
          Authorization: credential.wc.access_token,
        },
      });
    }

    return next.handle(request);
  }
}
