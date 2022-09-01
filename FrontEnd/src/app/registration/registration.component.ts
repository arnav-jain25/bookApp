import { Component, OnInit } from '@angular/core';
import { Users } from '../User';
import { UserService } from '../user-service.service';
 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
  user:Users=new Users();
 
  constructor(private UserService: UserService) { }
 
  ngOnInit(): void {
   
  }
 
  onSubmit() {
    console.log('data from form');
    console.log(this.user);
    this.addUser();
  }
  addUser() {
    return this.UserService.postUserDataAPI(this.user).subscribe(
      (data:any) => {
        console.log('user created');
        console.log(data);
        //this.redirectToDashboard();
      }
    );
  }
 
 
}
 

