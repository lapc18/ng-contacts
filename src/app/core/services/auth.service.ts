import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginType } from '../models/login.model';
import {
  getUsernameFromEmail,
  validateEmail,
} from 'src/app/core/utils/strings.util';
import { StorageService } from './storage.service';
import { Constants } from '../enums/constant-keys.enum';
import { AuthResponse } from '../models/auth-response.model';

@Injectable()
export class AuthService {
  private _api: string = environment.api.auth;

  private curentUser$: BehaviorSubject<Partial<AuthResponse>> =
    new BehaviorSubject<Partial<AuthResponse>>({});

  private token$: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  public get currentUser() {
    let value:any = this.curentUser$.getValue();
    if(!value || !value.id) value = this.sessionStorageService.get<AuthResponse>(Constants.NG_CURRENT_USR);
    return { ...value };
  }

  public set currentUser(user: AuthResponse) {
    this.curentUser$.next({ ...user });
    this.sessionStorageService.save({key: Constants.NG_CURRENT_USR, data: { ...user }});
  }

  public get token():string {
    let value = this.sessionStorageService.get<string>(Constants.NG_TOKEN);
    return value || this.token$.getValue();
  }

  public set token(token:string) {
    this.sessionStorageService.save({ key: Constants.NG_TOKEN, data: token});
    this.token$.next(token);
  }

  constructor(private http: HttpClient, private sessionStorageService: StorageService) {
    const token = this.sessionStorageService.get<string>(Constants.NG_TOKEN);
    this.token = token || '';
  }

  public login(details: LoginType): Observable<AuthResponse> {
    const url: string = [this._api, 'login'].join('/');
    return this.http.post<AuthResponse>(url, details);
  }

  public register(details: LoginType): Observable<AuthResponse> {
    const url: string = [this._api, 'register'].join('/');
    return this.http.post<AuthResponse>(url, setFullLoginBody(details));
  }
}

const setFullLoginBody = (details: LoginType): LoginType => {
  const user: string = details.email!;
  if (user && validateEmail(user)) return details;

  const username = getUsernameFromEmail(user);
  if (user && username) {
    details.email = undefined;
    details.username = username;
  }

  return details;
};
