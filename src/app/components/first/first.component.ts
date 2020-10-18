//#region Angular imports
import { Component, OnInit } from '@angular/core';
//#endregion
//#region Model imports
import { ProductCategory } from 'src/app/models';
//#endregion

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name: string;
  description: string;
  category: Array<ProductCategory>;
  price: number;
  isAvailable: boolean;

  constructor() {}

  ngOnInit(): void {
    this.name = 'Dummy shop product';
    this.description = 'Just a shoip product.';
    this.category = [ProductCategory.First];
    this.price = 1;
    this.isAvailable = true;
  }
}
