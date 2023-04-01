import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appExampleDirective]'
})
export class ExampleDirectiveDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.border='none';
    this.el.nativeElement.style.borderRadius='10px';
    this.el.nativeElement.style.fontSize='20px';
    this.el.nativeElement.style.boxShadow='4px 2px 20px red';
    this.el.nativeElement.style.fontFamily='medium';
   }

}
