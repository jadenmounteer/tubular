import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { Profile } from '../services/profile';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ProfilesService],
})
export class LoginComponent implements OnInit {
  profiles: Profile[] = [];
  @ViewChild('userNameInput') userNameInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;
  public errorMessage: string;
  public valid: boolean = true;

  constructor(private profilesService: ProfilesService, private route:Router) { }

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(): void {
    this.profilesService.getProfiles().subscribe(profiles => (this.profiles = profiles));
  }

  validateUserName() {
    const userName = this.userNameInput.nativeElement.value;

    // Check if user name is not blank
    if (userName.length == 0) {
      this.errorMessage = "Username cannot be blank";
      this.userNameInput.nativeElement.focus();
      this.valid = false;
      return;
    }

    // Check if user name exists
    let foundUsername = false;
    this.profiles.forEach(profile => {
      if (profile.userName == userName) {
        foundUsername = true;        
      }
    });

    if (!foundUsername) {
      this.errorMessage = "Username does not exist.";
      this.userNameInput.nativeElement.focus();
      this.valid = false;
      return;
    }

  }

  validatePassword() {
    const password = this.passwordInput.nativeElement.value;
    
    // Check if password is not blank
    if (password.length == 0) {
      this.errorMessage = "Password cannot be blank";
      this.passwordInput.nativeElement.focus();
      this.valid = false;
      return;
    }

    // Check if password exists
    let foundPassword = false;
    this.profiles.forEach(profile => {
      if (profile.password == password) {
        foundPassword = true;       
        return;
      }
    });

    if (!foundPassword) {
      this.errorMessage = "Password does not exist.";
      this.passwordInput.nativeElement.focus();
      this.valid = false;
      return;
    }
  }

  validateLogin() {
    const password = this.passwordInput.nativeElement.value;
    const userName = this.userNameInput.nativeElement.value;

    let validLogin = false;
    this.profiles.forEach(profile => {
      if (profile.userName == userName && profile.password == password) {
        validLogin = true;
        return;
      }
    });

    if (!validLogin) {
      this.errorMessage = "Please check your username or password.";
      this.userNameInput.nativeElement.focus();
      this.valid = false;
      return;
    }

  }

  login() {
    this.valid = true;
    this.validatePassword();
    this.validateUserName();
    this.validateLogin();


  }

}
