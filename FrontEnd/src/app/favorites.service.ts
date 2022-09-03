import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from './bookInterface';
import { Observable } from 'rxjs';
import { Favourites } from './Favourites';
import { Users } from './User';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favURL = 'http://localhost:8080/favourites';

  constructor(private httpclient: HttpClient) { }



  createFavourite(favourite: Favourites, user: Users, book: Books): Observable<Object> {
      return this.httpclient.post<Object>(`${this.favURL}/user/${user.id}/books/${book.id}`, favourite);
  }

  getFavouriteByUser(userId: number): Observable<Books[]> {
    return this.httpclient.get<Books[]>(`${this.favURL}/user/${userId}`);
  }
 
  removeFromFavourite(user: Users, book: Books): Observable<any> {
    return this.httpclient.delete<any>(`${this.favURL}/user/${user.id}/books/${book.id}`);
}
 
 
 
}

