import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {NgToastService} from 'ng-angular-popup';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.css']
})
export class ReservedComponent implements OnInit {

  constructor(public ser:ServiceService, public router:Router,private toast:NgToastService) { }
public id:any
public reserveDetails:any
public cinemaId:any
public movieId:any 
public seats:any
public ticketPrice:any
public total:any
public seatNames:any
public columns=['cinemaId','movieId','ticketPrice']



  ngOnInit(): void {
    this.toast.success({detail:"success Message",summary:"Your Seats are Booked!!",duration:5000})
    this.id=this.ser.putReserveId();
  console.log("welcome reservations")
  this.ser.getReservation(this.id).subscribe((data:any)=>{
    this.reserveDetails=[data]
    this.cinemaId=data.cinemaId
    console.log(data)
    console.log("reserve details")
     
    this.movieId=data.movieId;
    this.seats=data.seats
    this.ticketPrice=data.showId.ticketPrice
    this.total=data.total
    this.seatNames=data.seatNames
    
  },
  (err)=>{
    console.log("error")
  })
  }
 home(){
   this.router.navigateByUrl('/details')
 } 
  

}
