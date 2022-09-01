import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from './userProfileInterface';

@Injectable({
  providedIn: 'root'
})
export class UserProfileDataService {

  constructor(private httpClient: HttpClient) { }

  dataUrl = 'http://localhost:3000/user/3'

  getuserDataAPI(): Observable<UserProfile> {
    return this.httpClient.get<UserProfile>(this.dataUrl)
  }

  editUser(userEntry: UserProfile) {
    let editUrl = this.dataUrl + '/' + userEntry.id
    return this.httpClient.put(editUrl, userEntry)
  }

  getUserById(id: number): Observable<UserProfile> {
    // let url = this.dataUrl + '/' + id
    return this.httpClient.get<UserProfile>(this.dataUrl);
  }
}
