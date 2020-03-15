import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly userBaseUrl = '/api/users';
  private readonly userInfUrl = '/api/user';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(this.userBaseUrl);
  }

  getUserInfo() {
    return this.http.get<User>(this.userInfUrl);
  }

  createUser(user: User) {
    return this.http.post<User>(this.userBaseUrl, user);
  }
}
