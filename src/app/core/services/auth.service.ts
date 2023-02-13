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

@Injectable()
export class AuthService {
  private _api: string = environment.api.auth;

  private curentUser$: BehaviorSubject<{ username?: string; email?: string }> =
    new BehaviorSubject<{ username?: string; email?: string }>({});

  private token$: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  public get currentUser() {
    return this.curentUser$.getValue();
  }

  public set currentUser({
    username,
    email,
  }: {
    username?: string;
    email?: string;
  }) {
    this.curentUser$.next({ username, email });
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

  public login(details: LoginType): Observable<boolean> {
    const url: string = [this._api, 'login'].join('/');
    return this.http.post<boolean>(url, details);
  }

  public register(details: LoginType): Observable<boolean> {
    const url: string = [this._api, 'register'].join('/');
    return this.http.post<boolean>(url, setFullLoginBody(details));
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
