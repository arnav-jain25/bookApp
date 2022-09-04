import { Injectable } from '@angular/core';
import { Users } from './User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from './UserLogin';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  dataUrl = 'http://localhost:8080/Users'
 
  constructor(private httpClient: HttpClient) { }
 
  postUserDataAPI(user:Object): Observable<Object> {
    return this.httpClient.post<Users>(`${this.dataUrl}`,user)
  }

  postLoginAPI(user:UserLogin): Observable<Object> {
    return this.httpClient.post<Object>(`${this.dataUrl}/login`,user)
  }

  getUserByIdAPI(UserId:number): Observable<Users>{
    return this.httpClient.get<Users>(`${this.dataUrl}/${UserId}`)
  }

  updateUserbyAPI(UserId:number, user: Users): Observable<Users>{
    return this.httpClient.put<Users>(`${this.dataUrl}/${UserId}`,user);
  }

}
