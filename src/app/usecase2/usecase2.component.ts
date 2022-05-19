import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { city } from '../location';
import { movies } from '../movies';
import { ServiceService } from '../service.service';
import { cinemas } from '../cinemas'
import {PipePipe} from '../core/pipes/pipe.pipe'
import { Route, Router } from '@angular/router';
 

@Component({
  selector: 'app-usecase2',
  templateUrl: './usecase2.component.html',
  styleUrls: ['./usecase2.component.css']
})
export class Usecase2Component implements OnInit {
  public loading=true;
  public errorMsg!:string;
  public enter=false;
  public successMsg!:string;
  public show!:any
  public columns=['name','city','ticketPrice','book']
  public movies!: movies[]
  public city!: city[]
  public cinemas!: cinemas[]
  public cine!: any
  public movie:any
  public mov!:any
  public cityId!:string
  public movieId!:string
  constructor(public ser: ServiceService, private pipe:PipePipe,private router: Router) { }

  ngOnInit(): void {
    this.ser.getMovies().subscribe((data: movies[]) => {
      this.movies = data
      this.loading=false
    })
    // console.log("usercase2")
    this.ser.getCity().subscribe((data: city[]) => {
      this.city = data
      this.loading=false
    })
 


  }
  get_city() {
    this.ser.getCity().subscribe((data: city[]) => {
      this.city = data
      this.loading=false
    })
  }

  onchangecity(event: { value: string; }) {
    let array=new Array()
    this.cityId=event.value
    // this.cityName = (event.target as HTMLInputElement).value;
    if (this.cityId) {
      this.ser.getCinemas(this.cityId).subscribe(
        data => {
          console.log(data)
          console.log("cinemas")
          this.loading=false
          for(let i=0;i<data.length;i++){
            array.push(data[i].movieId.title)
            
          }
          let unique = array.filter((item, i, ar) => ar.indexOf(item) === i);
          this.mov=unique
          console.log(this.mov)
          console.log("moviename")
        }

      )
    }
  }
  onchangemovie(event: { value: any; }){
    
    this. movie=event.value
    console.log(this.cityId)
    console.log("onchange of movie")
    // const movie=(event.target as HTMLInputElement).value;
    console.log(this.movie)
    this.ser.getMovieIdByname(this.movie).subscribe(
      data=>{
        this.movieId=data
        console.log(data)
        console.log(this.movieId)
        console.log("movieId")
      }
    )
  }
  search(){
    this.enter=true;
    
    if(this.movieId){
      this.ser.getCinema(this.cityId,this.movieId).subscribe(
        data=>{
          console.log(data)
          this.loading=false
          this.cine=data
          console.log(this.cine)
          console.log("cinema")
        }
      )
    }
    

  }
bookShow(id:string){
  let cineId=id
  console.log(id)
  console.log("your user ID is above")
  let movieId=this.cine[0].movieId
  // this.ser.getShow(cineId,movieId)
  //   .subscribe((show) => {
  //     console.log(show)
  //   },
  //   (error: ErrorEvent) => {
  //     this.errorMsg = error.error.message;
  //   });
  this.ser.get(id,movieId)
  // console.log(id)
  this.router.navigateByUrl('/screen')
  // this.router.navigateByUrl('/user/seat')
  // this.ser.getSeats(id).subscribe(
  //   data=>{
  //     console.log(data)
  //   }
  // )

//  console.log(this.router)
}

  // bookShow(id: string) {
  //   this.ser.cancelAppointment(id)
  //     .pipe(
  //       mergeMap(() => this.appointmentService.getAppointments())
  //     )
  //     .subscribe((appointments: Appointment[]) => {
  //       this.appointments = appointments;
  //       this.successMsg = 'Successfully cancelled appointment';
  //     },
  //     (error: ErrorEvent) => {
  //       this.errorMsg = error.error.message;
  //     });
  // }

}

