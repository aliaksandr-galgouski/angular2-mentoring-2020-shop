import { ProductModel } from 'src/app/products/models';

export class CartItemModel {
  constructor(public product: ProductModel, public quantity: number) {}

  get totalPrice(): number {
    return this.product.price * this.quantity;
  }
}
