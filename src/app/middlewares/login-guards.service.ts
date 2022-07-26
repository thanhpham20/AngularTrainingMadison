import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LoginGuardsService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
