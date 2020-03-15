export class User {
  id: number;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  token?: string;


  constructor(email: string, firstname: string, lastname: string, username: string, password: string) {
    this.username = username;
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
  }
}
