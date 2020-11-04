//#region Angular imports
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
//#endregion

@Directive({
  // tslint:disable-next-line
  selector: '[apply-styles]',
})
export class ApplyStylesDirective {
  @Input('apply-styles') styles: { [key: string]: string };

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick(): void {
    const element = this.elementRef.nativeElement;
    for (const property in this.styles) {
      if (Object.prototype.hasOwnProperty.call(this.styles, property)) {
        const propertyValue = this.styles[property];

        console.log(property, propertyValue);
        this.renderer.setStyle(element, property, propertyValue);
      }
    }
  }
}
