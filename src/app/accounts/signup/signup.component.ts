import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Gender, User, UserPostData } from '../models/user.model';

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

  constructor(private userService: UserService, private routerService: Router) {
    this.user = new User();
  }

  submit(form: NgForm): void {
    this.submitted = true;
    if (form.valid) {
      console.log('Valid Form');
      let postData = new UserPostData(
        form.value['email'],
        form.value['password'],
        form.value['age'],
        form.value['gender']
      );
      this.userService.signupUser(postData);
      this.routerService.navigate(['./home/login']);
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
