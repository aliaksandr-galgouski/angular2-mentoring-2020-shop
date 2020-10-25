import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  // tslint:disable-next-line
  selector: '[click.stop]',
})
export class ClickStopDirective {
  @Output('click.stop') clickEvent = new EventEmitter<MouseEvent>();

  @HostListener('click', ['$event']) onClick(event: MouseEvent): void {
    event.stopPropagation();
    this.clickEvent.emit(event);
  }
}
