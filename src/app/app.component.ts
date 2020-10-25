//#region Angular imports
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
//#endregion

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  titleClasses: any = { 'text-center': true };
  titleStyles: any = { 'font-style': 'italic' };

  @ViewChild('appTitle') titleRef: ElementRef<HTMLElement>;

  constructor() {}

  ngAfterViewInit(): void {
    this.titleRef.nativeElement.textContent = 'Shop';
  }
}
