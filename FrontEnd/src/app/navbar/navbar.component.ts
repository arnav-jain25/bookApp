import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { Books } from '../bookInterface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private bookService:BookServiceService, private route:ActivatedRoute, private router:Router) { }

  search:String='';

  bookData:Books[]=[]

  isVisible:Boolean=false;

  jsonStringObj:any;

  userId:number=0;

  ngOnInit(): void {
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
    sessionStorage.removeItem("user")
  }

  goToProfile(){
    this.jsonStringObj = sessionStorage.getItem('user');
    var obj = JSON.parse(this.jsonStringObj);
    this.userId=obj.id;
    console.log(this.userId);
    this.router.navigate(['my-profile',this.userId]);
  }
}
