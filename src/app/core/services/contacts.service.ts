import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IService } from '../interfaces/service.interface';
import { Contact } from '../models/contact.model';
import { Pagination } from '../models/pagination.model';
import { Response } from '../models/response.model';
import { AuthService } from './auth.service';

@Injectable()
export class ContactsService implements IService<Contact> {
  private _api: string = environment.api.contacts;

  private get currentUser() {
    return this.authService.currentUser;
  }

  constructor(private http: HttpClient, private authService: AuthService) {}

  findOne(id: string | number): Observable<Contact> {
    throw new Error('Method not implemented.');
  }

  find(pageable: Pagination): Observable<Response<Contact>> {
    const { page, take } = pageable;
    const url = `${this._api}?userId=${this.authService.currentUser.id!}&page=${page}&size=${take}`;
    return this.http.get<Response<Contact>>(url);
  }

  create(body: Contact): Observable<Contact> {
    return this.http.post<Contact>(this._api, { ...body });
  }

  update(body: Contact): Observable<Contact> {
    return this.http.put<Contact>(this._api, { ...body });
  }

  softDelete(id: number): Observable<boolean> {
    const url = `${this._api}?id=${id}`;
    return this.http.delete<boolean>(url);
  }

  hardDelete(id: string | number): Observable<boolean> {
    const url = `${this._api}?id=${id}&softDelete=false`;
    return this.http.delete<boolean>(url);
  }
}
