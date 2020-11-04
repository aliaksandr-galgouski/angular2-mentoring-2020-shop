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
  private cart = new BehaviorSubject<CartModel>({
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  });

  cart$: Observable<CartModel>;

  constructor() {
    this.cart$ = this.cart.asObservable();
  }

  addProduct(product: ProductModel, quantity: number = 1): void {
    if (!product) {
      return;
    }

    if (this.products.has(product)) {
      for (let i = 0; i < quantity; i++) {
        this.increaseQuantity(product);
      }
    } else {
      this.products.set(product, quantity);
    }

    this.updateCart();
  }

  removeProduct(product: ProductModel): void {
    if (!product) {
      return;
    }

    this.products.delete(product);

    this.updateCart();
  }

  removeAllProducts(): void {
    this.products.clear();

    this.updateCart();
  }

  increaseQuantity(product: ProductModel): void {
    if (!this.products.has(product)) {
      return;
    }

    const oldQuantity = this.products.get(product);
    this.products.set(product, oldQuantity + 1);

    this.updateCart();
  }

  decreaseQuantity(product: ProductModel): void {
    if (!this.products.has(product)) {
      return;
    }

    const oldQuantity = this.products.get(product);
    if (oldQuantity > 1) {
      this.products.set(product, oldQuantity - 1);
    } else {
      this.removeProduct(product);
    }

    this.updateCart();
  }

  private updateCart() {
    const items = this.getItems();
    const totalPrice = this.calculateTotalPrice(items);
    const totalQuantity = this.calculateTotalQuantity(items);

    this.cart.next({
      items,
      totalPrice,
      totalQuantity,
    });
  }

  private getItems(): CartItemModel[] {
    return Array.from(this.products)
      .filter(([product, quantity]) => !!product && quantity > 0)
      .map(([product, quantity]) => new CartItemModel(product, quantity));
  }

  private calculateTotalPrice(items: CartItemModel[]): number {
    return items.reduce((price, item) => price + item.totalPrice, 0);
  }

  private calculateTotalQuantity(items: CartItemModel[]): number {
    return items.reduce((quantity, item) => quantity + item.quantity, 0);
  }
}
