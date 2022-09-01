import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './bookInterface';
 
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
 
  dataUrl = 'http://localhost:8080/Books'
 
  constructor(private httpClient: HttpClient) { }
 
  getbookDataAPI(): Observable<Books[]> {
    return this.httpClient.get<Books[]>(`${this.dataUrl}`)
  }
  deleteBookFromFavourites(userId: number, bookId: number) {
    let delUrl = 'localhost:8080/favourites/user/' + userId+ '/books/'+ bookId;
    return this.httpClient.delete(`${delUrl}`)
  }
 
  getbookDataByIdAPI(BookId:number): Observable<Books> {
    return this.httpClient.get<Books>(`${this.dataUrl}/${BookId}`)
  }
}