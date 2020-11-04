//#region Angular imports
import { Injectable } from '@angular/core';
//#endregion
//#region Models imports
import { ConfigModel } from '../models';
//#endregion

@Injectable({
  providedIn: 'root',
})
export class ConfigOptionsService {
  private config: ConfigModel = {};

  setConfig(value: ConfigModel): void {
    this.config = { ...this.config, ...value };
  }

  getConfig(): ConfigModel {
    return { ...this.config };
  }
}
