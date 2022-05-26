import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class ManageLoginService {

  addLoggedInUserToLocalStorage(user: User) {
    localStorage.setItem("userName", user.userName);
    localStorage.setItem("password", user.password);
    localStorage.setItem("email", user.email);
  }

  getLoggedInUserFromLocalStorage():User {
    const userName = localStorage.getItem("userName");
    const password = localStorage.getItem("password");
    const email = localStorage.getItem("email");
    const loggedInUser = new User(userName, password, email);
    return loggedInUser;
  }
}