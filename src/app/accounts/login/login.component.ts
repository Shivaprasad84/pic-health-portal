import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user!: User;
  submitted: boolean = false;

  constructor(private routerService: Router, private userService: UserService) {
    this.user = new User();
  }


  submit(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      console.log('Valid Form');
      let user = new User(form.value['email'], form.value['password']);
      this.userService.loginUser(user);
      this.routerService.navigate(['./dashboard']);
    } else {
      console.log('Invalid Form');
    }
  }

  clear(form: NgForm): void {
    form.reset();
    form.resetForm();
    this.submitted = false;
  }
}
