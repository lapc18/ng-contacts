import { Observable } from "rxjs";
import { Pagination } from "../models/pagination.model";
import { Response } from "../models/response.model";

export interface IService<T> {
  find(pageable: Pagination): Observable<Response<T>>;
  findOne(id: number | string): Observable<T>;
  create(object: T): Observable<T>;
  update(object: T): Observable<T>;
  softDelete(id: number | string): Observable<boolean>;
  hardDelete(id: number | string): Observable<boolean>;
}
