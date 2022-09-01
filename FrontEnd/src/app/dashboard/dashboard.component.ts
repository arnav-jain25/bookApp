import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorites.service';
import { Books } from '../bookInterface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  addedtofav = false;

  favData: Books[] = []

  constructor(private favoriteservice: FavoriteService) { }


  ngOnInit(): void {

  }
  addToFav(id: number)
  {
    this.favoriteservice.addtofavorites(id).subscribe(( data => {this.addedtofav=true;}))
  }
  // fillfav(){
  //   this.b.isFav = !this.addedtofav;
  // }
  removeFromFav(id: number)
  {
    this.favoriteservice.removefromfavorites(id).subscribe((data => {this.addedtofav=false;}))
  }
  



  b: any[]=[
    {
      title: 'dfsda',
      author: 'dhfbgf',
      rating:5,
      isFav: false
    },
    {
      title: 'dfsda',
      author: 'dhfbgf',
      rating:5,
      isFav: false
    },
    {
      title: 'dfsda',
      author: 'dhfbgf',
      rating:5,
      isFav: false
    },
    {
      title: 'dfsda',
      author: 'dhfbgf',
      rating:5,
      isFav: false
    }
  ]

  auth: any[]=[
    {
      authorName: 'dfsda'
    },
    {
      authorName: 'dfsda'
    },
    {
      authorName: 'dfsda'
    },
    {
      authorName: 'dfsda'
    }
  ]
}
