import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class Toast {
  public handleOpenToast(
    snackbar: any,
    message: string,
    button: string,
    duration: number,
    classCss: string
  ): void {
    snackbar.open(message, button, {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [classCss],
    });
  }
}
