export type Gender = 'Male' | 'Female' | 'Other' | undefined;

export class User {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  age: number | undefined = undefined;
  gender: Gender = undefined;
  constructor(email: string = '', password: string = '', age = undefined, gender: Gender = undefined) {
    this.email = email;
    this.password = password;
    this.age = age;
    this.gender = gender;
  }
}
