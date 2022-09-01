import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Books } from '../bookInterface';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
 
  bookData: Books[] = []
 
  constructor(private bookService: BookServiceService) { }
 
  ngOnInit(): void {
    this.bookService.getbookDataAPI().subscribe(data => {
      console.log(data);
      this.bookData = data
    });
  }
 
}
