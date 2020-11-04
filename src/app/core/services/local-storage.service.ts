//#region Angular imports
import { Injectable } from '@angular/core';
//#endregion

@Injectable()
export class LocalStorageService {
  private storage = window.localStorage;

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  getItem(key: string): string {
    return this.storage.getItem(key);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }
}
