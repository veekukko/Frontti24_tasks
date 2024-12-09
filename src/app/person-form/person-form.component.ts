// src/app/person-form/person-form.component.ts
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { Person } from './person.model';


@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  person: Person = new Person();

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    if (localStorage.getItem('formSubmitted') === 'true') {
      this.snackBar.open('Form submitted successfully!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });

      localStorage.removeItem('formSubmitted');
    }
  }

  submitForm(personForm: NgForm) {
    if (personForm.valid) {
      localStorage.setItem('formSubmitted', 'true');

      // Snack bar message
      this.snackBar.open('Form submitted successfully!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });

      personForm.resetForm(); 
      this.person = new Person(); 
    }
  }
}

