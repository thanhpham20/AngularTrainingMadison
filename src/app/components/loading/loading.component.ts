import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
})
export class LoadingComponent {
  constructor() { }
  @Input() size = 50;
  @Input() color = 'warn';
}
