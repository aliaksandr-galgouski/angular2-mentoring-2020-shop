//#region Angular imports
import { Component, OnInit } from '@angular/core';
//#endregion
//#region Service imports
import { ProductsService } from 'src/app/services';
//#endregion
//#region Model imports
import { ProductModel } from 'src/app/models';
//#endregion

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Array<ProductModel>;

  constructor(private readonly productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
