import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import{showtime} from'./showtime';
import { city } from './location';
import { movies } from './movies';
import { cinemas } from './cinemas';
import { Seats} from './Seats';
import { Router } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // private _seats:any;
  public idCine:any
  public idRes:any
  public idMovie:any
  public showId:any
  public UserId:any
  public cost!:number
  public costuu!:number

  public isLogin:boolean=false

  private _seats: Array<Seats>;
  url:string='http://34.208.61.254:8080'
  constructor(private http:HttpClient, private router:Router, private dialog:MatDialog ) {    this._seats = []; this.idCine; this.idRes }
  // openConfirmDialog(){
  //   this.dialog.open(DialogComponent,{
  //     width:'390px',
  //     disableClose:true
  //   })
  // }
  RefreshToken(refreshToken:any):Observable<any>{
    return this.http.post<any>(`${this.url}/refresh`,{refreshToken})
  }
  LoginUser(email:string,password:string):Observable<any>{
    return this.http.post<any>(`${this.url}/users/login`,{email,password})
  }
  getShowtime():Observable<showtime[]>{
    return this.http.get<showtime[]>(`${this.url}/showtimes`)
  }
  getCinemaId(cinemaId:string):Observable<any>{
    return this.http.get<any>(`${this.url}/cinemas/id/${cinemaId}`)
  }
getShow(cinemaId:string,movieId:string):Observable<any>{
    return this.http.get<any>(`${this.url}/show/${cinemaId}/${movieId}`)
  }
logPut(){
  this.isLogin=!!localStorage.getItem('token')
  console.log(this.isLogin)
  console.log("islogin value")
  return !!localStorage.getItem('token')
}
CreateShowtime(startAt:string,startDate:Date, endDate:Date):Observable<showtime>{
  return this.http.post<showtime>(`${this.url}/showtimes`,{startAt,startDate, endDate})
}
CancelShowtime(id:string):Observable<any>{
  return this.http.delete(`${this.url}/showtimes/${id}`);
}
getCity():Observable<city[]>{
  return this.http.get<city[]>(`${this.url}/getCity`)

}
getMovieIdByname(name:string):Observable<any>{
  return this.http.get<any>(`${this.url}/movies/name/${name}`)
}
getMovies():Observable<movies[]>{
  return this.http.get<movies[]>(`${this.url}/movies`)
}
getCinemas(cityId:string):Observable<any>{

  return this.http.get<any>(`${this.url}/cinemas/${cityId}`)

}
getCinema(cityId:string,movieId:string):Observable<cinemas[]>{

  return this.http.get<cinemas[]>(`${this.url}/cinemas/${cityId}/${movieId}`)

}
deleteDetailsUser(Id:string):Observable<any>{
  return this.http.delete<any>(`${this.url}/reservations/${Id}`)
}
getDetailsUser(userId:string):Observable<any>{
return this.http.get<any>(`${this.url}/reservations/user/${userId}`)
}
// selectSeatbyid(seatId: number) {
//   return this.http.post<Seat>( `${this.url}/cinemas/${cityName}/${moviename}`);
// }
public get(id:any,movId:any){
  this.idCine=id
  this.idMovie=movId
}
public getReserveId(id:string,cost:number){
  // console.log("reserve ID")
  this.cost=cost

  this.idRes=id
}
public putReserveId(){
  console.log("Rade")
  return this.idRes
}
public put(){
  // this.idCine="6278a9aec91095d5d836ccdb"
  return this.showId
}

public getAllSeats():Observable<any> {
  return this.http.get<any>(`${this.url}/seats`);
}
public getSeats(id:string):Observable<any> {
  return this.http.get<any>(`${this.url}/showtimes/${id}`);
}
public addSeatsDetail(seatDetails:string):Observable<any> {
  return this.http.post<any>(`${this.url}/seats`, seatDetails);
}

public toggleSeatSelect(seatNum: String) {
  this._seats.forEach((value, index) => {
    if (value.seatNum.trim() === seatNum) {
      value.isSelected = !value.isSelected;
    }
  });
}
public bookSeat(seats:any):Observable<any> {
  console.log(seats);
  return this.http.patch(`${this.url}/seats`, seats);


}
// public reserve(id:any):Observable<any>{
//   return this.http.get<any>(`${this.url}/show/seats/${seatsAvailable}/${_id}`)

// }

public changeCinemaSeat(seatsAvailable:number,_id:number){
  console.log("temple run")
  console.log(this.UserId)
  this.http.get<any>(`${this.url}/show/seats/${seatsAvailable}/${_id}`).subscribe((data)=>{
  return data
  },
  (err)=>{
    return err
  })

  
}
public confirm(seats:number,ticketPrice:number,total:number,showId:string,cinemaId:string,movieId:string,UserId:string):Observable<any>{
  return this.http.post<any>(`${this.url}/reservations`,{seats,ticketPrice,total,showId,cinemaId,movieId,UserId})
}
public seatUpdate(seat:any,id:any):Observable<any>{
  return this.http.post<any>(`${this.url}/show/seats/update`,{seat,id})
}
public release(seats:any):Observable<any>{
  console.log(seats);
  console.log("freeeeee")
  console.log("reached")
  return this.http.patch(`${this.url}/seats/free/f`, seats);
}
public getReservation(id:string):Observable<any>{
  return this.http.get<any>(`${this.url}/reservations/${id}`)
}
public LogOut(){
  localStorage.removeItem('token')
  localStorage.removeItem('userType')

}
}