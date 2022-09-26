import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user!: User;
  submitted: boolean = false;

  constructor() {
    this.user = new User();
  }


  submit(form: NgForm) {
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
    this.submitted = false;
  }
}
