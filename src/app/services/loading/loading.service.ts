import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Loading {
  private isLoading$ = new BehaviorSubject<boolean>(false);
  public readonly selectedLoading$ = this.isLoading$.asObservable();
  public show() {
    this.isLoading$.next(true);
  }
  public hide() {
    this.isLoading$.next(false);
  }
}
