import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Constants } from "../enums/constant-keys.enum";
import { SessionStorageService } from "../services/session-storage.service";

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {

  constructor(
    private sessionStorageService: SessionStorageService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token:string | undefined  = this.sessionStorageService.get(Constants.NG_TOKEN);

    let request = req.clone({
      url: [environment.api.host, req.url].join('/')
    });

    if(token) {
      request = req.clone({
        url: [environment.api.host, request.url].join('/'),
        setHeaders: {
          "Authorization": `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }

}
