//#region Angular imports
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
//#endregion
//#region Model imports
import { CartItemModel, CartModel } from '../models';
import { ProductModel } from 'src/app/products/models';
//#endregion

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products = new Map<ProductModel, number>();
  private cart = new BehaviorSubject<CartModel>({ items: [], totalPrice: 0 });

  cart$: Observable<CartModel>;

  constructor() {
    this.cart$ = this.cart.asObservable();
  }

  addProduct(product: ProductModel): void {
    if (!product) {
      return;
    }

    const oldQuantity = this.products.get(product) ?? 0;
    this.products.set(product, oldQuantity + 1);

    this.notifySubscribers();
  }

  removeProduct(product: ProductModel, all: boolean = false): void {
    if (!product) {
      return;
    }

    const oldQuantity = this.products.get(product) ?? 0;
    if (oldQuantity === 0) {
      return;
    } else {
      this.products.set(product, oldQuantity - 1);
    }

    this.notifySubscribers();
  }

  removeAllItems(): void {
    this.products.clear();

    this.notifySubscribers();
  }

  private notifySubscribers(): void {
    const items = this.getItems();
    const totalPrice = this.calculateTotalPrice(items);

    this.cart.next({
      items,
      totalPrice,
    });
  }

  private getItems(): CartItemModel[] {
    return Array.from(this.products)
      .filter(([product, quantity]) => !!product && quantity > 0)
      .map(([product, quantity]) => new CartItemModel(product, quantity));
  }

  private calculateTotalPrice(items: CartItemModel[]): number {
    return items.reduce((totalPrice, item) => totalPrice + item.totalPrice, 0);
  }
}
