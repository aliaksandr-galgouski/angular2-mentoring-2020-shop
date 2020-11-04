import { CartItemModel } from './cart-item.model';

export interface CartModel {
  items: CartItemModel[];
  totalPrice: number;
  totalQuantity: number;
}
