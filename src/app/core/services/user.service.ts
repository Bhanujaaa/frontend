import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

url:string='http://localhost:3000/users/login'
  constructor(private http:HttpClient,private router:Router) { }
  Login(email:string,password:string){
    let obj={
      email,
      password
    }
    this.http.post<any>(this.url,obj).subscribe({
          next: (res) => {
            console.log(res)
            this.router.navigateByUrl('/user/home')
          },
          error: (err) => { console.log(err) }
        })
    
      }

      Register(name:string,email:string,password:string){
        let obj={
          name,
          email,
          password
        }
        this.http.post<any>(this.url,obj).subscribe({
              next: (res) => {
                console.log(res)
                
              },
              error: (err) => { console.log(err) }
            })
          }


          
}
