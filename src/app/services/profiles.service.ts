import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Profile } from './profile';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  //profilesUrl = 'http://localhost:3000/profiles';
  profilesUrl = 'https://tubular-backend.herokuapp.com/profiles';
  private handleError: HandleError;

  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {this.handleError = httpErrorHandler.createHandleError('ProfilesService'); }

  /** GET all profiles from the server */
  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.profilesUrl)
      .pipe(
        catchError(this.handleError('getProfiles', []))
      );
  }

   /** POST: add a new profile to the database */
  addProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.profilesUrl, JSON.stringify(profile), httpOptions)
      .pipe(
        catchError(this.handleError('addProfile', profile))
      );
  }


}
