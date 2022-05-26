import { ManageLoginService } from '../services/manage-login.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-exercise-library',
  templateUrl: './exercise-library.component.html',
  styleUrls: ['./exercise-library.component.scss'],
  providers: [ManageLoginService]
})
export class ExerciseLibraryComponent implements OnInit {
  public user: User

  constructor(private manageLoginService: ManageLoginService) { }

  ngOnInit(): void {
    this.user = this.manageLoginService.getLoggedInUserFromLocalStorage();
  }

}
