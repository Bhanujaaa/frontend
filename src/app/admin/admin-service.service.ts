import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
public url:string='http://34.208.61.254:8080'
public movieAdd:boolean=false
public movieEdit:boolean=false
public movieDelete:boolean=false
public movieEditId:any
public movieDeleteId:any
public cineAdd:boolean=false
public cineEdit:boolean=false
public cineDelete:boolean=false
public cineEditId:any 
public cineDeleteId:any
public cityAdd:boolean=false
public cityEdit:boolean=false
public cityDelete:boolean=false
public cityEditId:any 
public cityDeleteId:any
public userDelete:boolean=false
public userDeleteId:any
public showAdd:boolean=false
public showEdit:boolean=false
public showDelete:boolean=false
public showEditId:any 
public showDeleteId:any
public seatAdd:boolean=false
public seatEdit:boolean=false
public seatDelete:boolean=false
public seatEditId:any 
public seatDeleteId:any
  constructor(public http:HttpClient) { }
  getMovies(){
    return this.http.get<any>(`${this.url}/movies`)
    }
    getMoviesId(id:string){
      return this.http.get<any>(`${this.url}/movies/${id}`)
    }
    postMovies(movie:any){
      return this.http.post<any>(`${this.url}/movies`,{movie})
    }
    editMovies(movie:any,id:string){
      return this.http.put<any>(`${this.url}/movies/${id}`,{movie})
    }
    deleteMovies(id:string){
      return this.http.delete<any>(`${this.url}/movies/${id}`)
    }
    getCine(){
      return this.http.get<any>(`${this.url}/cinemas`)
    }
    getCineId(id:string){
      return this.http.get<any>(`${this.url}/cinemas/ide/${id}`)
    }
    postCine(cine:any){
      return this.http.post<any>(`${this.url}/cinemas`,{cine})
    }
    editCine(cine:any,id:string){
      return this.http.patch<any>(`${this.url}/cinemas/${id}`,{cine})
    }
    deleteCine(id:string){
      return this.http.delete<any>(`${this.url}/cinemas/${id}`)
    }
    getCity(){
      return this.http.get<any>(`${this.url}/getCity`)
    }
    getCityId(id:string){
      return this.http.get<any>(`${this.url}/getCity/${id}`)
    }
    postCity(city:any){
      return this.http.post<any>(`${this.url}/addCity`,{city})
    }
    editCity(city:any,id:string){
      return this.http.patch<any>(`${this.url}/updateCity/${id}`,{city})
    }
    deleteCity(id:string){
      return this.http.delete<any>(`${this.url}/deleteCity/${id}`)
    }
    getUser(){
      return this.http.get<any>(`${this.url}/users`)
    }
   
    deleteUser(id:string){
      return this.http.delete<any>(`${this.url}/users/${id}`)
    }
    getShow(){
      return this.http.get<any>(`${this.url}/showtimes`)
      }
      getShowId(id:string){
        return this.http.get<any>(`${this.url}/showtimes/${id}`)
      }
      postShow(show:any){
        return this.http.post<any>(`${this.url}/showtimes`,{show})
      }
      editShow(show:any,id:string){
        return this.http.patch<any>(`${this.url}/showtimes/${id}`,{show})
      }
      deleteShow(id:string){
        return this.http.delete<any>(`${this.url}/showtimes/${id}`)
      }
      getSeat(){
        return this.http.get<any>(`${this.url}/seats`)
        }
        postSeat(seat:any){
          return this.http.post<any>(`${this.url}/seats`,{seat})
        }
        editSeat(seat:any,id:string){
          return this.http.patch<any>(`${this.url}/seats/${id}`,{seat})
        }
        deleteSeat(id:string){
          return this.http.delete<any>(`${this.url}/seats/${id}`)
        }
        getReserve(){
          return this.http.get<any>(`${this.url}/reservations`)
        }

}
