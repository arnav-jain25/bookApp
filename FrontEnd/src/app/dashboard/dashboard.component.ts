import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorites.service';
import { Books } from '../bookInterface';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { Favourites } from '../Favourites';
import { Users } from '../User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 

  bookData: Books[] = []
  jsonStringObj: any;

  userId: number = 0;

  book: any;

  favourite: Favourites = new Favourites();

  constructor(private favourtieService: FavoriteService,private bookService: BookServiceService, private route: ActivatedRoute, private router: Router) { }


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
        //book.isFav = !book.isFav
    
      //  this.router.navigate(['favourites/', this.userId]);
      }
    );



  }
 
  



  
}
