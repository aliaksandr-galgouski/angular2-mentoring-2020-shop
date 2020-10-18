import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//#region Module imports
import { AppRoutingModule } from './app-routing.module';
//#endregion
//#region Component imports
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
//#endregion

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
