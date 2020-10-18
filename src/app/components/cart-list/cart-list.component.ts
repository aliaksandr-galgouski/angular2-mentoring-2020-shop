//#region Angular imports
import { Component, OnInit } from '@angular/core';
//#endregion
//#region Service imports
import { CartService } from 'src/app/services';
//#endregion
//#region Model imports
import { ProductModel } from 'src/app/models';
//#endregion

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  items: Array<ProductModel>;

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.updateCartItems();
  }

  onClickClearBtn(): void {
    console.log('CartListComponent', 'Clear');
    this.cartService.clear();
    this.updateCartItems();
  }

  private updateCartItems() {
    this.items = this.cartService.getItems();
  }
}
