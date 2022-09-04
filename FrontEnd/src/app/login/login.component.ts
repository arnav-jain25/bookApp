import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { UserLogin } from '../UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router: Router, private route: ActivatedRoute) { }

  userLogin:UserLogin=new UserLogin();

  jsonStringObj:any;

  userId:number=0;


  ngOnInit(): void {
  }

  OnSubmit(){
    console.log(this.userLogin)
    this.login()
  }
  login() {

    return this.userService.postLoginAPI(this.userLogin).subscribe(
      (data:any) => {
        console.log('user created');
        console.log(data);
        //Storing user in session storage
        sessionStorage.setItem("user", JSON.stringify(data));
        this.jsonStringObj = sessionStorage.getItem('user');
        var obj = JSON.parse(this.jsonStringObj);
        console.log(obj.id);
        this.router.navigate(['dashboard/',obj.id]);
      }
    );
  }

  goToDashboard(){
    
    this.jsonStringObj = sessionStorage.getItem('user');
    this.userId= JSON.parse(this.jsonStringObj).id;
    console.log("user in go to fav func",this.userId);
    this.router.navigate(['dashboard/',this.userId]);
  }

// var jsonStringObj = sessionStorage.getItem('object'); // This is the json string we stored

// var obj = JSON.parse(jsonStringOBJ); // this is your object

// console.log(obj.department); // access properties as usual

}
