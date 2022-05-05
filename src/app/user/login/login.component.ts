import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string
  password!: string
  constructor(private http: HttpClient, private router: Router, private userservice: UserService,private ser:ServiceService) { }

  ngOnInit(): void {
    
  }
  login() {
    let credentials = {
      email: this.email,
      password: this.password
    }
    this.ser.LoginUser(credentials.email,credentials.password).subscribe((user:any)=>{
      console.log(user)
      // this.router.navigateByUrl('/user/home')
    })
  }

}

