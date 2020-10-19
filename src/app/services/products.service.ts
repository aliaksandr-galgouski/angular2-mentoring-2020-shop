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
export class ProductsService {
  constructor() {}

  getProducts(): Array<ProductModel> {
    return DUMMY_PRODUCTS;
  }
}
