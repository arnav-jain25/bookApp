import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfileDataService } from '../user-profile-data.service';
import { UserProfile } from '../userProfileInterface';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user: UserProfile=new UserProfile()

  constructor(private route: ActivatedRoute, private userService: UserProfileDataService) { }

  ngOnInit(): void {
    let obj = this.route.snapshot.paramMap.get('id');
    let userId = obj != null ? parseInt(obj) : -1;

    this.userService.getUserById(userId).subscribe(u => this.user = u);
  }

  updateUser(person: UserProfile) {
    console.log(person);
    this.userService.editUser(person)
      .subscribe(data => {
        console.log('Data Updated Successfully');
        window.location.href='/bms';
      });

  }


}
