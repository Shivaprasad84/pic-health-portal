import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserPostData } from '../accounts/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:5010';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  loginUser(user: User): void {
    this.http.post<User>(this.url + '/login', user, this.httpOptions).subscribe({
      next: (response) => console.log(response),
      error: () => console.log('something went wrong')
    });
  }

  signupUser(userPostData: UserPostData): void {
    this.http.post<User>(this.url + '/signup', userPostData, this.httpOptions).subscribe((response: any) => {
      console.log(response);
    });
  }

  getUsers(): Observable<UserPostData[]> {
    return this.http.get<UserPostData[]>(this.url + '/users', this.httpOptions);
  }
}
