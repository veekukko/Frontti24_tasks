// src/app/person-form/person-form.component.ts
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms'; // Import NgForm
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

      // Remove the flag after showing the message
      localStorage.removeItem('formSubmitted');
    }
  }

  submitForm(personForm: NgForm) {
    if (personForm.valid) {
      // Store a flag in localStorage
      localStorage.setItem('formSubmitted', 'true');

      // Display the snack bar message
      this.snackBar.open('Form submitted successfully!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });

      // Reset form
      personForm.resetForm(); 
      this.person = new Person(); 
    }
  }
}

