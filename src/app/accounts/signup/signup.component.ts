import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gender, User } from '../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user!: User;
  genders: Gender[] = [
    'Male',
    'Female',
    'Other'
  ];
  submitted: boolean = false;

  constructor() {
    this.user = new User();
  }

  submit(form: NgForm): void {
    this.submitted = true;
    if (form.valid) {
      console.log('Valid Form');
    } else {
      console.log('Invalid Form');
    }
    console.log(form.value);
  }

  clear(form: NgForm): void {
    form.reset();
    form.resetForm();
    this.submitted = false;
    // this.user.email = '';
    // this.user.age = undefined;
    // this.user.gender = undefined;
    // this.user.password = '';
    // this.user.confirmPassword = '';
  }
}
