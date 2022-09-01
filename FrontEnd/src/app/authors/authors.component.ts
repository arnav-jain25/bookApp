import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Books } from '../bookInterface';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  bookData: Books[] = []

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.bookService.getbookDataAPI().subscribe(data => this.bookData = data)
  }

}
