// это вы для какого-то инструмента так комментируете или для себя?
// Обычно разделяют пустой строкой

//#region Angular imports
import { Injectable } from '@angular/core';
//#endregion
//#region Model imports
import { ProductModel } from '../../products/models';
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
    return [...DUMMY_PRODUCTS];
  }

  getProduct(id: number): ProductModel {
    return DUMMY_PRODUCTS.find((product) => product.id === id);
  }
}
