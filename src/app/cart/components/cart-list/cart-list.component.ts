//#region Angular imports
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
//#endregion
//#region Service imports
import { CartService } from '../../services';
//#endregion
//#region Models imports
import { CartItemModel, CartModel } from '../../models';
//#endregion

const ORDER_VARIANTS = [
  { name: 'Name', selector: 'product.name' },
  { name: 'Price', selector: 'product.price' },
  { name: 'Total price', selector: 'totalPrice' },
  { name: 'Quantity', selector: 'quantity' },
];

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit, OnDestroy {
  private cartSubscription: Subscription;

  items: CartItemModel[];
  totalPrice: number;
  totalQuantity: number;

  orderByVariants = ORDER_VARIANTS;
  orderByDescending: boolean;
  orderByProperty: string;

  get hasItems(): boolean {
    return this.items.length > 0;
  }

  constructor(private readonly cartService: CartService) {}

  //#region Hooks
  ngOnInit(): void {
    this.orderByProperty = this.orderByVariants[0].selector;
    this.orderByDescending = true;

    this.cartSubscription = this.cartService.cart$.subscribe(
      (cart: CartModel) => {
        this.items = cart.items;
        this.totalPrice = cart.totalPrice;
        this.totalQuantity = cart.totalQuantity;
      }
    );
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }
  //#endregion

  onRemoveAll(): void {
    this.cartService.removeAllProducts();
  }

  onRemoveProduct(item: CartItemModel): void {
    this.cartService.removeProduct(item.product);
  }

  onIncreaseQuantityOfProduct(item: CartItemModel): void {
    this.cartService.increaseQuantity(item.product);
  }
  onDicreaseQuantityOfProduct(item: CartItemModel): void {
    this.cartService.decreaseQuantity(item.product);
  }
}
