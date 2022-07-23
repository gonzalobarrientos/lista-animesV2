import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class TitleDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.fontSize = "50px";
    element.nativeElement.style.color = "white";
  }

}
