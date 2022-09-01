import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserProfile } from '../userProfileInterface';
import { UserProfileDataService } from '../user-profile-data.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  userData: UserProfile = new UserProfile();

  constructor(private userService: UserProfileDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getuserDataAPI().subscribe(data => {
      console.log(data);
      this.userData = data;
    })
  }

  editData(userObj: any) {
    console.log('Edit Button clicked ' + userObj.userid);
    let id = userObj.userid;
    this.router.navigate(['my-profile/' + id]);

    //let bk = { "id": 1, "bTitle": "Tile", "bAuthor": "Author", "bCopies": 765423 }
    //this.bookService.editBook(bk).subscribe(bk => { this.ngOnInit() })
  }


}
