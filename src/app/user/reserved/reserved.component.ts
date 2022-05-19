import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
;
import { ServiceService } from 'src/app/service.service';

const E:any[]=[
  {cinemaId:'SVP',movieId:'SVO',ticketPrice:150,seats:2,total:300}
]
@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.css']
})
export class ReservedComponent implements OnInit {

  constructor(public ser:ServiceService, public router:Router) { }
public id:any
public reserveDetails:any
public cinemaId:any
public movieId:any 
public seats:any
public ticketPrice:any
public total:any
public columns=['cinemaId','movieId','ticketPrice']
public obj=new MatTableDataSource(E)


  ngOnInit(): void {
    this.id=this.ser.putReserveId();
  console.log("welcome reservations")
  this.ser.getReservation(this.id).subscribe((data:any)=>{
    this.reserveDetails=[data]
    this.cinemaId=data.cinemaId
    console.log(data)
    console.log("reserve details")
     this.obj=this.reserveDetails;
    this.movieId=data.movieId;
    this.seats=data.seats
    this.ticketPrice=data.showId.ticketPrice
    this.total=data.total
    
  },
  (err)=>{
    console.log("error")
  })
  }
 home(){
   this.router.navigateByUrl('/details')
 } 
  

}
