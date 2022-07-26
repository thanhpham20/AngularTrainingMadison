import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { LoadingModule } from '../../components/loading/loading.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DebounceModule } from '../../directives/debounce/debounce.module';
// import { Myimport { MatInputModule } from '@angular/material/input';
import { InputModule } from '../../directives/input/input.module';
import { FormFieldModule } from '../../components/form-field/form-field.module';
// import { ToastModule } from '../../components/toast/toast.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    LoadingModule,
    CommonModule,
    RegisterRoutingModule,
    //material ui

    LoadingModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    //debounce module
    DebounceModule,
    InputModule,
    FormFieldModule,
    MatSnackBarModule,
    // ToastModule,
  ],
})
export class RegisterModule {}
