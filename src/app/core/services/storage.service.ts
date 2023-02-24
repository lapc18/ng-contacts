import { Injectable } from "@angular/core";


@Injectable()
export class StorageService {
  clear() {
      localStorage.clear();
  }

  save({ data, key }:{ data: any, key:string}): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  get<T>(key: string): T | undefined {
    const value:string|null = localStorage.getItem(key);
    return value && !value.toLocaleLowerCase().includes("null") ? JSON.parse(value) as T : undefined;
  }

}
