import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[myInput]',
})
export class MyInputDirective {
  constructor(public ngControl: NgControl) {}
}
