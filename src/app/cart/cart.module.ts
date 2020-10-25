//#region Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion
//#region Module imports
import { SharedModule } from '../shared/shared.module';
//#endregion
//#region Component imports
import { CartListComponent, CartItemComponent } from './components';
//#endregion

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [CommonModule, SharedModule],
  exports: [CartListComponent],
})
export class CartModule {}
