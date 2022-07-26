import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoadingModule } from '../../components/loading/loading.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DebounceModule } from '../../directives/debounce/debounce.module';
import { FormFieldModule } from '../../components/form-field/form-field.module';
import { InputModule } from '../../directives/input/input.module';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    LoginComponent,
    // DebounceClickDirective,
    // LoadingComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormFieldModule,
    FormsModule,
    LoadingModule,
    //material ui
    MatInputModule,
    MatButtonModule,
    //debounce module
    DebounceModule,
    InputModule,
    MatSnackBarModule,
  ],
})
export class LoginModule {}
