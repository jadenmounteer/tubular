import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ExerciseLibraryComponent } from './exercise-library/exercise-library.component';
import { LoginComponent } from './login/login.component';

// Set up the different routes here
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'create-profile', component: CreateProfileComponent},
  {path: 'exercise-library', component: ExerciseLibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
