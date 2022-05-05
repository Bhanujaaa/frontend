import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{showtime} from'./showtime';
import { city } from './location';
import { movies } from './movies';
import { cinemas } from './cinemas';
import { Seats} from './Seats';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // private _seats:any;
  private _seats: Array<Seats>;
  url:string='http://localhost:8080'
  constructor(private http:HttpClient ) {    this._seats = []; }
  LoginUser(email:string,password:string):Observable<any>{
    return this.http.post<any>(`${this.url}/users/login`,{email,password})
  }
  getShowtime():Observable<showtime[]>{
    return this.http.get<showtime[]>(`${this.url}/showtimes`)
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
getMovies():Observable<movies[]>{
  return this.http.get<movies[]>(`${this.url}/movies`)
}
getCinemas(cityName:string):Observable<cinemas[]>{

  return this.http.get<cinemas[]>(`${this.url}/cinemas/${cityName}`)

}
getCinema(cityName:string,moviename:string):Observable<cinemas[]>{

  return this.http.get<cinemas[]>(`${this.url}/cinemas/${cityName}/${moviename}`)

}
// selectSeatbyid(seatId: number) {
//   return this.http.post<Seat>( `${this.url}/cinemas/${cityName}/${moviename}`);
// }
public getAllSeats():Observable<any> {
  return this.http.get("http://localhost:8080"+'/seats');
}
public addSeatsDetail(seatDetails:string):Observable<any> {
  return this.http.post("http://localhost:8080" + '/seats', seatDetails);
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
  return this.http.patch("http://localhost:8080" + '/seats', seats);


}
public reserve(seats:any):Observable<any>{
  return this.http.get<any>("http://localhost:8080" + '/name/SVP/vizag')

}
public confirm(seats:number,ticketPrice:number,total:number):Observable<any>{
  return this.http.post<any>("http://localhost:8080"+'/reservations',{seats,ticketPrice,total})
}


}