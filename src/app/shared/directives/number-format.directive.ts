import { Directive, ElementRef, HostListener, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appNumberFormat]'
})
export class NumberFormatDirective {
  el: any;

  constructor(
    private elementRef: ElementRef,
    @Self() private ngControl: NgControl
  ) {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    if (this.ngControl.valid) {
      this.el.value = this.transform(value);
    }
  }

  transform(value: string): string {
    const formattedValue = Number(value.replace(',', '.')).toFixed(3);
    return formattedValue;
  }
}
