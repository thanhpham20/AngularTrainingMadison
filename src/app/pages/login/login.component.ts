import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { Loading } from '../../services/loading/loading.service';
import { FormLogin } from '../../model/auths';
import { handleCompare } from '../../helper/bcryptis';
import { Toast } from '../../utils/toast';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    public loading: Loading,
    private _snackBar: MatSnackBar,
    private toast: Toast,
    private route: Router
  ) {}
  public form: FormLogin = {
    email: '',
    password: '',
  };
  ngOnInit() {
    console.log(this.loading.selectedLoading$);
  }
  data: Subscription;
  onSubmit() {
    let data = { ...this.form };
    this.authService.getUsers().subscribe((value) => {
      const isExistEmail = value.find((item) => item.email === data.email);
      if (isExistEmail && handleCompare(data.password, isExistEmail.password)) {
        localStorage.setItem('user', isExistEmail.name);
        this.route.navigate(['/home']);
      } else {
        this.toast.handleOpenToast(
          this._snackBar,
          'Login Fail.',
          '',
          2000,
          'snack_bar_error'
        );
      }
    });
  }
}
