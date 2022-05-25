import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { Profile } from '../services/profile';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss'],
  providers: [ProfilesService],
})
export class CreateProfileComponent implements OnInit {
  public userName: string; // TODO use ViewChild to access field values
  public password: string;
  public repeatPassword: string;
  profiles: Profile[] = [];
  @ViewChild('userNameInput') userNameInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;
  @ViewChild('emailInput') emailInput: ElementRef;


  constructor(private profilesService: ProfilesService, private route:Router) {
   }

  ngOnInit(): void {
    this.getProfiles(); // This is so we can check and make sure there are no duplicates
  }

  getProfiles(): void {
    this.profilesService.getProfiles().subscribe(profiles => (this.profiles = profiles));
  }

  addProfile(): void {
    // TODO Validate the user inputs here.

    // The server will generate the id for this new profile
    const newProfile: Profile = { userName: this.userNameInput.nativeElement.value, password: this.passwordInput.nativeElement.value, email: this.emailInput.nativeElement.value } as Profile;
    this.profilesService
      .addProfile(newProfile)
      .subscribe(profile => this.profiles.push(profile));
  }

  submit() {    
    this.addProfile();

    // If the information is valid, navigate the user to the login page...
    //this.route.navigate(['/login']);
  }

}
