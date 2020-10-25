//#region Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion
//#region Module imports
import { SharedModule } from '../shared/shared.module';
//#endregion
//#region Component imports
import { ProductComponent, ProductListComponent } from './components';
//#endregion

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProductListComponent],
})
export class ProductsModule {}
