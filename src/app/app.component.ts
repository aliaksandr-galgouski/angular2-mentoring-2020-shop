//#region Angular imports
import { TitleCasePipe } from '@angular/common';
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
//#endregion

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TitleCasePipe],
})
export class AppComponent implements AfterViewInit {
  titleClasses: any = { 'text-center': true };
  titleStyles: any = { 'font-style': 'italic' };
  titleStylesOnClick: any = {
    color: 'blue',
    fontSize: '24px',
    outline: '1px solid red',
  };

  @ViewChild('appTitle') titleRef: ElementRef<HTMLElement>;

  constructor(private titleCasePipe: TitleCasePipe) {}

  ngAfterViewInit(): void {
    const title = 'shop, click me!';
    const element = this.titleRef.nativeElement;
    element.textContent = this.titleCasePipe.transform(title);
  }
}
