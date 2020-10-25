//#region Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion
//#region Directive imports
import directives from './directives';
//#endregion

@NgModule({
  declarations: [...directives],
  imports: [CommonModule],
  exports: [...directives],
})
export class SharedModule {}
