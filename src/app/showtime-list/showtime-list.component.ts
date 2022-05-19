import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from '../service.service';
import { showtime } from '../showtime';

@Component({
  selector: 'app-showtime-list',
  templateUrl: './showtime-list.component.html',
  styleUrls: ['./showtime-list.component.css']
})
export class ShowtimeListComponent implements OnInit {
  public successMsg!: string;
  public errorMsg!: string;
  startAt!: string;
  startDate!: Date;
  endDate!: Date;
  public show:any;
  public movie:any
  public columns=['startAt','seatsAvailable','book']
  public showId:any
  constructor(public ser:ServiceService,private router:Router) { }

  ngOnInit(): void {
    let maincineId=this.ser.idCine;
    let mainmovieId=this.ser.idMovie;
    
  console.log(maincineId)
  console.log(mainmovieId)
  //  let cinemaId="6274ac5cb1b90f1bb17114c9";
  //  let movieId="626e8780a89a8bb94c6ead62";
    this.ser.getShow(maincineId,mainmovieId)
      .subscribe((show) => {
        this.show=show
        this.showId=show._id
        this.movie=show.movieId
        console.log(show)
        console.log("show above")
        
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }
  book(id:string){
    // this.putShowId()
    this.ser.showId=id;
    console.log(this.ser.showId)
    console.log("above is show ID")
    this.router.navigateByUrl('/user/seat')
  }
  putShowId(){
    console.log(this.showId);
    console.log("show id is above")
    this.ser.showId=this.showId
  }

}

