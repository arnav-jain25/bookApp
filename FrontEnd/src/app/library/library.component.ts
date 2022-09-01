import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { Books } from '../bookInterface';
import { FavoriteService } from '../favorites.service';
import { Favourites } from '../Favourites';
import { Users } from '../User';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
 
  bookData: Books[] = []

  UserData: Users[] = []
 
  constructor(private favourtieService:FavoriteService,private bookService: BookServiceService, private route:ActivatedRoute, private router:Router) { 

  }
 
  ngOnInit(): void {
    this.bookService.getbookDataAPI().subscribe(data => {
      console.log(data);
      this.bookData = data
    });
  }

  addToFavourites(userId:number, bookId:number)
  {
    this.favourtieService.addtofavoritesService(userId,bookId).subscribe(
      data => {console.log(data)}
    );
    console.log("addToFavourites")
    this.router.navigate(['favourites',userId ,bookId])
  }
 
}
