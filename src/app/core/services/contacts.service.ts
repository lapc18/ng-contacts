import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class ContactsService {

  private _api:string = "";

  constructor(private http: HttpClient) {}


}
