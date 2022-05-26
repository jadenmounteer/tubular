import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class ManageLoginService {

  addUserLoggedInUserToLocalStorage(user: User) {
    console.log(user);
  }

  getLoggedInUserFromLocalStorage() {

  }
}