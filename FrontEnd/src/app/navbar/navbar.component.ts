import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { Books } from '../bookInterface';
import { FavoriteService } from '../favorites.service';
import { Favourites } from '../Favourites';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private favourtieService:FavoriteService, private bookService:BookServiceService, private route:ActivatedRoute, private router:Router) { }

  search:String='';

  bookData:Books[]=[]

  isVisible:Boolean=false;

  jsonStringObj:any;

  userId:number=0;

  favourite: Favourites = new Favourites();

  ngOnInit(): void {

    this.jsonStringObj = sessionStorage.getItem('user');
    this.userId= JSON.parse(this.jsonStringObj).id;
    
  }

  OnSubmit(){
    this.isVisible=true;
    console.log(this.search)
    this.searchFunc(this.search)
  }

  searchFunc(search:String){
    // call API from service
    this.bookService.searchbookByBookNameAPI(search).subscribe(data => {
      console.log(data);
      this.bookData = data
    });
  }

  LogoutUser(){
    sessionStorage.removeItem("user");
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
      alert("this book is addded to favourites");
      }
    );
  }

  goToProfile(){
    
    console.log(this.userId);
    this.router.navigate(['my-profile',this.userId]);
  }

  goToFavourites(){
    
    console.log("user in go to fav func",this.userId);
    this.router.navigate(['favourites/',this.userId]);
  }

  goToDashboard(){
    
    console.log("user in go to fav func",this.userId);
    this.router.navigate(['dashboard/',this.userId]);
  }

  goToRecommendation(){
    
    console.log("user in go to fav func",this.userId);
    this.router.navigate(['recommendations/',this.userId]);
  }

  goToLibrary(){
    
    console.log("user in go to fav func",this.userId);
    this.router.navigate(['library/',this.userId]);
  }
}
