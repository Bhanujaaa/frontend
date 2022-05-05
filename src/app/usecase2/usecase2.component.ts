import { Component, OnInit } from '@angular/core';
import { city } from '../location';
import { movies } from '../movies';
import { ServiceService } from '../service.service';
import { cinemas } from '../cinemas'
import {PipePipe} from '../core/pipes/pipe.pipe'
import { Pipe, PipeTransform } from '@angular/core';
// import * as _ from 'lodash'; 

@Component({
  selector: 'app-usecase2',
  templateUrl: './usecase2.component.html',
  styleUrls: ['./usecase2.component.css']
})
export class Usecase2Component implements OnInit {
  public loading=true;
  public errorMsg!:string;
  public successMsg!:string;
  public show!:any
  public columns=['name','city','seatsAvailable','book']
  public movies!: movies[]
  public city!: city[]
  public cinemas!: cinemas[]
  public cine!: any
  public mov!:any
  public cityName!:string
  constructor(private ser: ServiceService, private pipe:PipePipe) { }

  ngOnInit(): void {
    this.ser.getMovies().subscribe((data: movies[]) => {
      this.movies = data
      this.loading=false
    })
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

  onchangecity(event: Event) {
    let array=new Array()
    this.cityName = (event.target as HTMLInputElement).value;
    if (this.cityName) {
      this.ser.getCinemas(this.cityName).subscribe(
        data => {
          this.loading=false
          for(let i=0;i<data.length;i++){
            array.push(data[i].moviename)
            
          }
          let unique = array.filter((item, i, ar) => ar.indexOf(item) === i);
          this.mov=unique
        }

      )
    }
  }
  onchangemovie(event:Event){
    const movie=(event.target as HTMLInputElement).value;
    console.log(movie)
    if(movie){
      this.ser.getCinema(this.cityName,movie).subscribe(
        data=>{
          this.loading=false
          this.cine=data
          console.log(data)
        }
      )
    }
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

