//#region Angular imports
import { InjectionToken } from '@angular/core';
//#endregion

export const APP_CONSTANTS = {
  AppTilte: 'Shop',
  Ver: '0.0.1',
};

export const ConstantsToken = new InjectionToken<any>('AppConstants');
