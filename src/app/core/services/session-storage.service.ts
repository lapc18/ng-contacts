import { Injectable } from "@angular/core";


@Injectable()
export class SessionStorageService {
  clear() {
      sessionStorage.clear();
  }

  save({ data, key }:{ data: any, key:string}): void {
      sessionStorage.setItem(key, JSON.stringify(data));
  }

  get<T>(key: string): T | undefined {
    const value:string|null = sessionStorage.getItem(key);
    return value && !value.toLocaleLowerCase().includes("null") ? JSON.parse(value) as T : undefined;
  }

}
