import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from './bookInterface';
import { Observable } from 'rxjs';
import { Favourites } from './Favourites';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favURL = 'http://localhost:8080/favourites';

  constructor(private httpclient : HttpClient, favourite:Favourites) { }

  addtofavoritesService(userId:number,bookId:number): Observable<Favourites> 
  {
    console.log(Favourites);
    return this.httpclient.post<Favourites>(`${this.favURL}/user/1/books/${bookId}`,Favourites);

  }
  removefromfavorites(bookid:any)
  {
    return this.httpclient.delete(this.favURL + '/' + bookid)
  }
}

