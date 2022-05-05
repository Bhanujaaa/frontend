import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  constructor(private userservice:UserService,private http:HttpClient) { }

  ngOnInit(): void {
  }
  register(){
  let credentials = {
    username:this.username,
        email: this.email,
        password: this.password,
        phone:this.phone
      }
      this.http.post('http://localhost:8080/users/register', credentials).subscribe({
        next: (res) => {
          console.log(res)
        },
        error: (err) => { console.log(err) }
      })
    }
  
  }

