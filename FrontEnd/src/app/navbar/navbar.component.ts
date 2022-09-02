import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Books } from '../bookInterface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private bookService:BookServiceService) { }

  search:String='';

  bookData:Books[]=[]

  isVisible:Boolean=false;

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
}
