import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileDataService } from '../user-profile-data.service';
import { UserProfile } from '../userProfileInterface';
import { Users } from '../User';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  // user: UserProfile=new UserProfile()

  userId:number=0;
  user: Users=new Users()

  constructor(private userService: UserService,
    private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // let obj = this.route.snapshot.paramMap.get('id');
    // let userId = obj != null ? parseInt(obj) : -1;

    // this.userService.getUserById(userId).subscribe(u => this.user = u);
    this.getUserDetails();
  }

  onSubmit(){
    console.log("details updated");
    this.updateUserDetails();
  }

  getUserDetails(){
    this.userId=this.route.snapshot.params['userId']
    return this.userService.getUserByIdAPI(this.userId).subscribe(data=>{
      this.user=data;
      console.log("Profile Data",data);
    })
  }

  updateUserDetails() {
   return this.userService.updateUserbyAPI(this.userId,this.user).
      subscribe(data => {
        console.log('User Data Updated Successfully');
        this.router.navigate(['/my-profile',this.userId]);
      });

  }


}
