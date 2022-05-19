import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-show-update',
  templateUrl: './show-update.component.html',
  styleUrls: ['./show-update.component.css']
})
export class ShowUpdateComponent implements OnInit {
public startAt!:string;
public seats!:any[]
public seatsAvailable!:number
public ticketPrice!:number
public movieId!:string
public cinemaId!:string
public movieN:any
public cineN:any
public seatN:any

  constructor(public ser:AdminServiceService,public service:ServiceService) { }

  ngOnInit(): void {
    this.service.getMovies().subscribe((data:any)=>{
      this.movieN=data
    })
    this.ser.getCine().subscribe((data)=>{
      this.cineN=data
    })
    this.ser.getSeat().subscribe((data)=>{
      this.seatN=data
    })
    if(this.ser.showEdit==true){
      console.log(this.ser.showEdit)
      this.ser.getShowId(this.ser.showEditId).subscribe((data:any)=>{
        this.startAt=data.startAt,
        this.seats=data.seats,
        this.seatsAvailable=data.seatsAvailable,
        this.ticketPrice=data.ticketPrice,
        this.movieId=data.movieId,
        this.cinemaId=data.cinemaId,
        console.log(data)
    })
    }

  }
  AddShow(){
    let credentials = {
      startAt: this.startAt,
      seats: this.seats,
      ticketPrice:this.ticketPrice,
      
      
      movieId:this.movieId,
      cinemaId:this.cinemaId,
      seatsAvailable:this.seatsAvailable,
   
    }
    this.ser.postShow(credentials).subscribe((data)=>{
console.log(data)
    })
  }
  editShow(){
    let credentials = {
      startAt: this.startAt,
      seats: this.seats,
      seatsAvailable:this.seatsAvailable,
      ticketPrice:this.ticketPrice,
      movieId:this.movieId,
      cinemaId:this.cinemaId,
    }
    let _id=this.ser.showEditId
    this.ser.editShow(credentials,_id).subscribe((data)=>{
      
    })
  }
  deleteShow(){
    let id=this.ser.showDeleteId
    this.ser.deleteShow(id).subscribe((data)=>{
        console.log(data)
      })

  }


}
