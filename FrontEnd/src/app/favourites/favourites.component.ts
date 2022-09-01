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
  bookData: Books[] = []
  constructor(private favouriteService:FavoriteService ,private bookService: BookServiceService, private route:ActivatedRoute, private router:Router) { }

  userId:number=0;
  bookId:number=0;
  favourite:Favourites=new Favourites();
 
  ngOnInit(): void {
    // this.bookService.getbookDataAPI().subscribe(data => this.bookData = data)
    // this.getFavouriteDetails();
  }
 
  // getFavouriteDetails(){
  //   this.userId=this.route.snapshot.params['userId'];
  //   this.bookId=this.route.snapshot.params['bookId'];
  //   this.favouriteService.addtofavorites(this.userId,this.bookId).subscribe(
  //     data => {console.log(data)}
  //   );
  // }

  delete(userId:number,bookId:number) {
    console.log('Delete Button clicked')
    this.bookService.deleteBookFromFavourites(userId,bookId).subscribe(data => {
      console.log(data);
  })
}
 
}
