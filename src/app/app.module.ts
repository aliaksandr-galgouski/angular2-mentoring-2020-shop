import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//#region Module imports
import { AppRoutingModule } from './app-routing.module';
//#endregion
//#region Component imports
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
//#endregion

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    CartListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
