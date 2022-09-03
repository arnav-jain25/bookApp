import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../bookInterface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  bookData:Books[]=[]
  jsonStringObj:any;

  userId:number=0;

  constructor(private bookService:BookServiceService, private route:ActivatedRoute, private router:Router) { }


  ngOnInit(): void {

    this.jsonStringObj = sessionStorage.getItem('user');
    this.userId= JSON.parse(this.jsonStringObj).id;
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
