import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Loading } from '../../services/loading/loading.service';
import { FormRegister } from '../../model/auths';
import { handleHash } from '../../helper/bcryptis';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Toast } from '../../utils/toast';
import { Router } from '@angular/router'; // import router from angular router
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnDestroy {
  constructor(
    private authService: AuthService,
    public loading: Loading,
    private _snackBar: MatSnackBar,
    private toast: Toast,
    private route: Router
  ) {}
  public form: FormRegister = {
    name: '',
    email: '',
    password: '',
  };
  public isSuccess: boolean = true;
  private users: Subscription;
  private registration: Subscription;
  onSubmit() {
    let data = { ...this.form };
    data.password = handleHash(data.password);
    this.users = this.authService.getUsers().subscribe((value) => {
      const isExistEmail = value.find((item) => item.email == data.email);
      if (isExistEmail) {
        this.isSuccess = false;
        this.toast.handleOpenToast(
          this._snackBar,
          'Email is exists.',
          '',
          2000,
          'snack_bar_error'
        );
      } else {
        this.registration = this.authService
          .handleRegister(data)
          .subscribe(() => {
            this.toast.handleOpenToast(
              this._snackBar,
              'Register successfully.',
              '',
              2000,
              'snack_bar_success'
            );
          });
        this.route.navigate(['/']);
      }
    });
  }
  ngOnDestroy(): void {
    this.users && this.users.unsubscribe();
    this.registration && this.registration.unsubscribe();
  }
}
