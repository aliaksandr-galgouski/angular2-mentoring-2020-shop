//#region Angular imports
import { Directive, HostBinding, HostListener, Input } from '@angular/core';
//#endregion

@Directive({
  // tslint:disable-next-line
  selector: '[highlight]',
})
export class HighlightDirective {
  private backgroundColor: string;
  @Input('highlight') highlightColor: string;

  @HostBinding('style.background-color') get getBackgroundColor(): string {
    return this.backgroundColor;
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.backgroundColor = null;
  }
}
