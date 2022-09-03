import { Component, OnInit } from '@angular/core';
import { Books } from '../bookInterface';
import { BookServiceService } from '../book-service.service';
import { Favourites } from '../Favourites';
import { ActivatedRoute, Router } from '@angular/router';
import { FavoriteService } from '../favorites.service';
 
 
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favBooks: Books[] = []
  constructor(private favouriteService:FavoriteService ,private bookService: BookServiceService, private route:ActivatedRoute, private router:Router) { }

  userId:number=0;

  jsonStringObj: any;

  updatedBook : Books = new Books();

  // userId: number = 0;

  // book: any;
 
  ngOnInit(): void {
   
    this.getFavouriteDetails();
  }
 
  getFavouriteDetails(){
    this.userId=this.route.snapshot.params['userId'];
    this.favouriteService.getFavouriteByUser(this.userId).subscribe(
      data => {
        console.log("favourite books",data);
        this.favBooks = data;
        
      }
    );
  }


  deleteFromFavourites(book: Books) {
    

    //printing book id
    console.log("book id from fav:", book.id);

    //get user from userId
    this.jsonStringObj = sessionStorage.getItem('user');
    var obj = JSON.parse(this.jsonStringObj);
    this.userId = obj.id;
    console.log("from fav user id", this.userId);


    //call service to remove a fav entry
    return this. favouriteService.removeFromFavourite(obj, book).subscribe(
      data => {
        console.log(data);
        book.isFav = false;
        //this.updateBookFavouriteStatus(book);
        this.getFavouriteDetails();
        
      }
    );



  }


  // updateBookFavouriteStatus(book: Books){
  //   return this.bookService.updateBookbyAPI(book.id,book).subscribe(
  //     data => {
        
  //       console.log("updated status for delete ", data);
  //      this.updatedBook = data;
  //      console.log("updated book for delete ", this.updatedBook);
       
      
    
  //       // this.router.navigate(['favourites/', this.userId]);
  //     })
  // }


 
}
