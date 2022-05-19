import { NgLocaleLocalization } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { ServiceService } from 'src/app/service.service';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup } from '@angular/forms';
import  jwt_decode from 'jwt-decode'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string
  password!: string
 
  logedIn:boolean=false
  constructor(private http: HttpClient, private router: Router, private userservice: UserService,private ser:ServiceService) { }
  public errorMsg!:string;
  public successMsg!:string;
  hide: boolean = false;
  ngOnInit(): void {
  }
  register(){
    this.router.navigateByUrl('/user/register')
  }
  login() {
    this.errorMsg="",
    this.successMsg=""
    let credentials = {
      email: this.email,
      password: this.password
    }
    this.ser.LoginUser(credentials.email,credentials.password).subscribe((user:any)=>{
      console.log(user.user)
      console.log(this.router)
      this.logedIn=true
      this.ser.UserId=user.user._id
      
      console.log(this.ser.UserId)
      console.log("loginUser")
      // console.log(user)
      localStorage.setItem('token',user.token)
      localStorage.setItem('userType',user.user.role)
      localStorage.setItem('refresh',user.refresh)
      const decryptedUser=jwt_decode(user.token);
      console.log(Object(decryptedUser).exp);
      console.log("decrypted User is above")
      localStorage.setItem('expiration',Object(decryptedUser).exp)
      // console.log(user.token)
      // console.log(user.user.role)
      this.ser.logPut()
      if(user.user.role=="admin"){
        this.router.navigateByUrl('/admin/movie')
      }
      else{
        this.router.navigateByUrl('/user/show')
      }
    
      
    
      this.successMsg="welcome"
    },
    (error)=>{
      this.errorMsg=error.error.error.message
    }
    )
  }

}

