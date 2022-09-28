import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserPostData } from '../accounts/models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  email: string = '';
  age: number | undefined = undefined;
  gender: string = '';
  usersArray: any[] = [];
  constructor(private userService: UserService) { }

  ngAfterViewInit(): void {
    this.userService.getUsers().subscribe((users: UserPostData[]) => {
      Object.values(users).forEach((val: any) => this.usersArray.push(val));
    });
  }

}
