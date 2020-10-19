//#region Angular imports
import { Injectable } from '@angular/core';
//#endregion
//#region Model imports
import { ProductModel } from '../models';
//#endregion
//#region Constant imports
import { DUMMY_PRODUCTS } from './mocks/PRODUCTS';
//#endregion

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Array<ProductModel> = [
    DUMMY_PRODUCTS[0],
    DUMMY_PRODUCTS[1],
    DUMMY_PRODUCTS[3],
  ];

  constructor() {}

  getItems(): Array<ProductModel> {
    return this.items;
  }

  clear(): void {
    this.items = [];
  }
}
