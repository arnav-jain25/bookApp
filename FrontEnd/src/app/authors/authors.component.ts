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
  
  authorList: String[]=[]

  uniqueAuthor: String[]=[]

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.bookService.getbookDataAPI().subscribe(data => {
      this.bookData = data;
      for(let i=0;i<this.bookData.length;i++)
      {
        this.authorList.push(this.bookData[i].aname);
      }
      this.uniqueAuthor = [...new Set(this.authorList)];
    })
    // this.getBookByAuthor(this.bookData[1].aname);
  }

  // getBookByAuthor(aName:String)
  // {
  //   this.bookService.getbookDataByAuthorAPI(aName).subscribe(data => this.bookData = data)
  // }

}
