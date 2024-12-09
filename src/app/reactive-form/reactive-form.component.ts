import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required, 
        Validators.minLength(2), 
        Validators.pattern('[A-Za-z]*')
      ]),
      lastName: new FormControl('', [
        Validators.required, 
        Validators.minLength(2), 
        Validators.pattern('[A-Za-z]*')
      ]),
      username: new FormControl('', [
        Validators.required, 
        Validators.minLength(6)
      ]),
      email: new FormControl('', [
        Validators.required, 
        Validators.email,
        patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),
      password: new FormControl('', [
        Validators.required, 
        Validators.minLength(10), 
        Validators.pattern('(?=.*[0-9])(?=.*[A-Z]).*')
      ]),
      confirmPassword: new FormControl('', Validators.required),
      socialSecurityNumber: new FormControl('', [
        Validators.required, 
        patternValidator(/^[0-9]{6}-[0-9]{4}$/)
      ]),
      acceptedTerms: new FormControl(false, Validators.requiredTrue),
    }, { validators: this.matchPasswords });
  }

  private matchPasswords(group: AbstractControl): ValidationErrors | null {
    const formGroup = group as FormGroup;
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsNotMatching: true };
  }

  submitForm() {
    if (this.reactiveForm.valid) {
      console.log('Jeejee toimii', this.reactiveForm.value);
      this.reactiveForm.reset(); // Reset form after submission
    } else {
      console.log('Form is invalid');
    }
  }
}


export function patternValidator(pattern: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && !pattern.test(control.value)) {
      return { 'patternInvalid': true };
    }
    return null;
  };
}

