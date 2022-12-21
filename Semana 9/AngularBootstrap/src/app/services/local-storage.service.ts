import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() { 
    this.storage = window.localStorage;
  }

  set(key: string, value: string){
    this.storage.setItem(key, JSON.stringify(value));
  }

  get(key: string){
    const item: any = this.storage.getItem(key);
    return JSON.parse(item);
  }


}
