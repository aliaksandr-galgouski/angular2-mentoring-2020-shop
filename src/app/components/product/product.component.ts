//#region Angular imports
import { Component, OnInit } from '@angular/core';
//#endregion

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClickBuyBtnHandler(): void {
    console.log('ProductComponent -> Buyed');
  }
}
