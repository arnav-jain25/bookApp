import { Component, OnInit } from '@angular/core';
import { Books } from '../bookInterface';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {


  bookData: Books[] = []

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.bookService.getbookDataAPI().subscribe(data => this.bookData = data)
  }

}
