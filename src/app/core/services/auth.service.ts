import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginType } from '../models/login.model';
import {
  getUsernameFromEmail,
  validateEmail,
} from 'src/app/core/utils/strings.util';
import { SessionStorageService } from './session-storage.service';
import { Constants } from '../enums/constant-keys.enum';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
  private _api: string = environment.api.auth;

  private curentUser$: BehaviorSubject<{ username?: string; email?: string, id?:number }> =
    new BehaviorSubject<{ username?: string; email?: string, id?:number }>({});

  private token$: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  public get currentUser() {
    let value = this.curentUser$.getValue();
    if(!value || !value.id) {
      value = this.sessionStorageService.get(Constants.NG_CURRENT_USR) || {};
      console.log('value', value);
    }
    return value;
  }

  public set currentUser({
    username,
    email,
    id
  }: {
    username?: string;
    email?: string;
    id?:number
  }) {
    this.curentUser$.next({ username, email, id });
    this.sessionStorageService.save({key: Constants.NG_CURRENT_USR, data: { username, email, id }});
  }

  public get token():string {
    return this.token$.getValue();
  }

  public set setToken(token:string) {
    this.token$.next(token);
  }

  constructor(private http: HttpClient, private sessionStorageService: SessionStorageService) {
    const token = this.sessionStorageService.get<string>(Constants.NG_TOKEN);

  }

  public login(details: LoginType): Observable<User> {
    const url: string = [this._api, 'login'].join('/');
    return this.http.post<User>(url, details);
  }

  public register(details: LoginType): Observable<User> {
    const url: string = [this._api, 'register'].join('/');
    return this.http.post<User>(url, setFullLoginBody(details));
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
