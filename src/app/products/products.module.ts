//#region Angular imports
import { NgModule } from '@angular/core';
//#endregion
//#region Module imports
import { SharedModule } from '../shared/shared.module';
//#endregion
//#region Component imports
import { ProductComponent, ProductListComponent } from './components';
//#endregion

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [SharedModule],
  exports: [ProductListComponent],
})
export class ProductsModule {}
