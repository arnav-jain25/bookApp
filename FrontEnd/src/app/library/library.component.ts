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

  updatedBook : Books = new Books();

  jsonStringObj: any;

  userId: number = 0;

  book: any;

  favourite: Favourites = new Favourites();

  constructor(private favourtieService: FavoriteService, private bookService: BookServiceService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.bookService.getbookDataAPI().subscribe(data => {
      console.log(data);
      this.bookData = data
    });
  }



  addToFavourites(book: Books) {


    //printing book id
    console.log("book id:", book.id);

    //get user from userId
    this.jsonStringObj = sessionStorage.getItem('user');
    var obj = JSON.parse(this.jsonStringObj);
    this.userId = obj.id;
    console.log("from library", this.userId);


    //call service to create a fav entry
    return this.favourtieService.createFavourite(this.favourite, obj, book).subscribe(
      data => {
        console.log("favourite created", data)
        //navigate to favourite page of a user
        book.isFav = true;
        //this.updateBookFavouriteStatus(book)
    
        // this.router.navigate(['favourites/', this.userId]);
      }
    );



  }

  // updateBookFavouriteStatus(book: Books){
  //   return this.bookService.updateBookbyAPI(book.id,book).subscribe(
  //     data => {
        
  //       console.log("updated status ", data);
  //      this.updatedBook = data;
  //      console.log("updated book ", this.updatedBook);
       
      
    
  //       // this.router.navigate(['favourites/', this.userId]);
  //     })
  // }






}
