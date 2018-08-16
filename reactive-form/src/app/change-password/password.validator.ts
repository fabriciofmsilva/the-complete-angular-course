import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

export class PasswordValidators {
  static validOldPassword(control: AbstractControl) {
    return new Promise((resolve) => {
      if (control.value !== '1234') {
        resolve({
          invalidOldPassword: true
        });
      } else {
        resolve(null);
      }
    });
  }

  static passwordsShouldMatch(controls: FormGroup): ValidationErrors|null {
    const password = controls.get('newPassword');
    const confirmPassword = controls.get('confirmPassword');

    if (password.value !== confirmPassword.value) {
      return {
        passwordsShouldMatch: true
      };
    }

    return null;
  }
}
