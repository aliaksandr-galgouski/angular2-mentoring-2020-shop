//#region Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion
//#region Directive imports
import {
  HighlightDirective,
  ClickStopDirective,
  ApplyStylesDirective,
} from './directives';
//#endregion

var directives = [HighlightDirective, ClickStopDirective, ApplyStylesDirective];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
  imports: [CommonModule],
})
export class SharedModule {}
