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

  get hasItems(): boolean {
    return this.items.length > 0;
  }

  constructor(private readonly cartService: CartService) {}

  //#region Hooks
  ngOnInit(): void {
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
