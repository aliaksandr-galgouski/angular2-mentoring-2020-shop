//#region Angular imports
import { Injectable, InjectionToken } from '@angular/core';
//#endregion

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  generate(n: number): string {
    let result = '';
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsLength = chars.length;

    for (var i = 0; i < n; i++) {
      result += chars.charAt(Math.floor(Math.random() * charsLength));
    }

    return result;
  }
}

export function GeneratorFactory(n: number): any {
  return function (service: GeneratorService): string {
    return service.generate(n);
  };
}

export const RandomToken = new InjectionToken<string>('RandomToken');
