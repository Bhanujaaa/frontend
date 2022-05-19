import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username!:string
  email!: string
  password!: string
  phone!:string
  constructor(private userservice:UserService,private http:HttpClient,public router:Router) { }

  ngOnInit(): void {
  }
  register(){
  let credentials = {
    username:this.username,
        email: this.email,
        password: this.password,
      }
      console.log(credentials)
      this.http.post('http://34.208.61.254:8080/users/register', credentials).subscribe({
        next: (res) => {
          console.log(res)
          this.router.navigateByUrl('/user/login')
        },
        error: (err) => { console.log(err) }
      })
    }
  
  }

