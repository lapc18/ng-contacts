import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AppStateService } from "../services/app-state.service";

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {

  constructor(
    private appState: AppStateService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { token }  = this.appState;

    let request = req.clone({
      url: [environment.api.host, req.url].join('/')
    });

    if(token) {
      request = request.clone({
        setHeaders: {
          "Authorization": `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }

}
