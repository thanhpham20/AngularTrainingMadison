import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from '../form-field/form-field.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [FormFieldComponent],
  imports: [
    CommonModule, //material ui
    MatInputModule,
  ],
  exports: [FormFieldComponent],
})
export class FormFieldModule {}
