import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from './bookInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favURL = 'http://localhost:3000/books';

  constructor(private httpclient : HttpClient) { }
  addtofavorites(bookid: number)
  {
    return this.httpclient.post(this.favURL,{id:bookid})
  }
  removefromfavorites(bookid:any)
  {
    return this.httpclient.delete(this.favURL + '/' + bookid)
  }
}

