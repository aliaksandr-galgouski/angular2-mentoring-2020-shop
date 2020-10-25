//#region Angular imports
import { Component, OnInit } from '@angular/core';
//#endregion
//#region Service imports
import { ProductsService } from '../../services';
import { CartService } from 'src/app/cart/services';
//#endregion
//#region Model imports
import { ProductModel } from '../../models';
//#endregion

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Array<ProductModel>;

  constructor(
    private readonly cartService: CartService,
    private readonly productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onBuyProduct(productId: number): void {
    const product = this.productService.getProduct(productId);

    this.cartService.addProduct(product);
  }
}
