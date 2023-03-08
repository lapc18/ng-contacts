import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Constants } from "../enums/constant-keys.enum";
import { AuthResponse } from "../models/auth-response.model";
import { Contact } from "../models/contact.model";
import { StorageService } from "./storage.service";


@Injectable()
export class AppStateService {

  public canRefresh$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private curentUser$: BehaviorSubject<Partial<AuthResponse>> =
    new BehaviorSubject<Partial<AuthResponse>>({});

  private contacts$: BehaviorSubject<Contact[]> =
    new BehaviorSubject<Contact[]>([]);

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

  public set contacts(contacts: Contact[]) {
    this.contacts$.next(contacts);
  }

  public get contacts():Contact[] {
    return this.contacts$.getValue();
  }

  constructor(private sessionStorageService: StorageService) {
    const token = this.sessionStorageService.get<string>(Constants.NG_TOKEN);
    this.token = token || '';
  }

  clear(): void {
    this.token = '';
    this.contacts = [];
    this.curentUser$.next({});
  }

}
