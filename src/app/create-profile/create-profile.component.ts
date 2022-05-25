import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { Profile } from '../services/profile';

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


  constructor(private profilesService: ProfilesService) {
   }

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(): void {
    this.profilesService.getProfiles().subscribe(profiles => (this.profiles = profiles));
  }

  addProfile(): void {
    // The server will generate the id for this new profile
    const newProfile: Profile = { userName: 'RXJS user', password: 'yoMomma27', email:'test@test.com' } as Profile;
    this.profilesService
      .addProfile(newProfile)
      .subscribe(profile => this.profiles.push(profile));
  }

  submit() {
    this.addProfile();
  }

}
