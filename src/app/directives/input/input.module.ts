import { NgModule } from '@angular/core';
import { MyInputDirective } from '../input/input.directive';

@NgModule({
  declarations: [MyInputDirective],
  exports: [MyInputDirective],
})
export class InputModule {}
