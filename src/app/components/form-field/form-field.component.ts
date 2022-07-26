import { Component, ContentChild, Input } from '@angular/core';
import { ERROR_MESSAGES } from '../../constants/error-messages';
import { MyInputDirective } from '../../directives/input/input.directive';

@Component({
  selector: 'my-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
  @ContentChild(MyInputDirective)
  myDirective!: MyInputDirective;
  @Input() data = 50;
  constructor() {}
  get errorMessage(): { message: string } | undefined {
    if (!this.myDirective?.ngControl?.control?.pristine) {
      const errors = Object.entries(
        this.myDirective?.ngControl?.control?.errors || {}
      );
      if (!errors.length) {
        return undefined;
      }
      const [key] = errors[0];
      const params = this.myDirective?.ngControl?.name || 'default';
      return {
        message: ERROR_MESSAGES[params][key],
      };
    } else {
      return undefined;
    }
  }
}
