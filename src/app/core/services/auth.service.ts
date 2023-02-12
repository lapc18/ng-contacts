import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginType } from '../models/login.model';

@Injectable()
export class AuthService {

  private _api:string = environment.api.auth;

  constructor(private http: HttpClient) {}

  public login(details: LoginType): Observable<boolean> {
    const url:string = [this._api, "login"].join('/');
    return this.http.post<boolean>(url, details);
  }

  public register(details: LoginType): Observable<boolean> {
    const url:string = [this._api, "register"].join('/');
    return this.http.post<boolean>(url, details);
  }


}
