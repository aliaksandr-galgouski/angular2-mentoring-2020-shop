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
//#region Pipe imports
import { OrderByPipe } from './pipes';
import { FormsModule } from '@angular/forms';
//#endregion

const directives = [
  HighlightDirective,
  ClickStopDirective,
  ApplyStylesDirective,
];
const pipes = [OrderByPipe];

const modules = [CommonModule, FormsModule];

@NgModule({
  declarations: [...directives, ...pipes],
  exports: [...modules, ...directives, ...pipes],
  imports: [...modules],
})
export class SharedModule {}
