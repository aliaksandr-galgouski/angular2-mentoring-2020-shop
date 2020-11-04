//#region Angular imports
import { NgModule } from '@angular/core';
//#endregion
//#region Module imports
import { SharedModule } from '../shared/shared.module';
//#endregion
//#region Component imports
import { CartListComponent, CartItemComponent } from './components';
//#endregion

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [SharedModule],
  exports: [CartListComponent],
})
export class CartModule {}
