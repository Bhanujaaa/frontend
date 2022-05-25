import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-seat-update',
  templateUrl: './seat-update.component.html',
  styleUrls: ['./seat-update.component.css']
})
export class SeatUpdateComponent implements OnInit {
public seatNum!:string
public isSelected!:boolean

  constructor(public ser:AdminServiceService,public router:Router,private toast:NgToastService) { }

  ngOnInit(): void {
    if(this.ser.seatEdit==true){
      this.isSelected=false
    }
  }
  AddSeat(){
    let credentials = {
      seatNum:this.seatNum,
     isSelected:this.isSelected
   
    }
    this.ser.postSeat(credentials).subscribe((data)=>{
console.log(data)
this.toast.success({detail:"success Message",summary:"Seat added!!",duration:5000})
    })
  }
  editSeat(){
    let credentials = {
      seatNum:this.seatNum,
     isSelected:this.isSelected
   
    }
    let _id=this.ser.seatEditId
    console.log("editseat")
    this.ser.editSeat(credentials,_id).subscribe((data)=>{
      console.log(data)
    })
  }
  deleteSeat(){
    let id=this.ser.seatDeleteId
    this.ser.deleteSeat(id).subscribe((data)=>{
        console.log(data)
        
       
      })
      this.router.navigate(['./admin/seat']);
      console.log("navigated in update")

  }


}
