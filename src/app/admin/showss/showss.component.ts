import { Component, OnInit,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service.service';
import { ShowUpdateComponent } from 'src/app/updates/show-update/show-update.component';
import { AdminServiceService } from '../admin-service.service';
import { NgToastModule, NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-showss',
  templateUrl: './showss.component.html',
  styleUrls: ['./showss.component.css']
})
export class ShowssComponent implements OnInit {
public show:any
public seatAvailable:any
public fullSeats:any
  constructor(public ser:AdminServiceService, private toast:NgToastService,public dialog:MatDialog,public service:ServiceService) { }

  ngOnInit(): void {
    this.ser.getShow().subscribe((data)=>{
     
      this.show=data
    

          })
  }
   freeSeat(id:string){
     this.ser.getShowId(id).subscribe((data)=>{
       this.seatAvailable=data.seats
      console.log(data)
      console.log(this.seatAvailable)
      
      console.log("seats are")
      console.log("seatsare",this.seatAvailable)
    if(this.seatAvailable){
    const selectedSeats = this.seatAvailable.filter((value: { isSelected: true; }) => value.isSelected);
    const reserved=this.seatAvailable.filter((value: { isSelected: false; }) => !value.isSelected);
    this.fullSeats=(selectedSeats.length+reserved.length)
    console.log(reserved.length)
    console.log("reserved seats are",reserved)
console.log("not reserved",selectedSeats)
    // console.log()
    // console.log(this.show._id)
    console.log(id)
    console.log("show id above")
    this.service.seatUpdate(this.fullSeats,id).subscribe(()=>{
      console.log("freeseatupdate")
      console.log(selectedSeats)
      this.service.release(selectedSeats).subscribe(()=>{
        console.log("freed")
      })
    })
    this.ngOnInit();
    this.toast.success({detail:"success Message",summary:"Seats are freed!!",duration:5000})
  }
})
    
  }
  addShow(){
    this.ser.showAdd=true
    let dialogRef=this.dialog.open(ShowUpdateComponent)
    dialogRef.afterClosed().subscribe(result=>{
console.log(result)
this.ser.showAdd=false
this.ngOnInit();

    })
    
  }
  editShow(id:string){
    this.ser.showEdit=true
    this.ser.showEditId=id
    let dialogRef=this.dialog.open(ShowUpdateComponent)
    dialogRef.afterClosed().subscribe(result=>{
      this.ser.showEdit=false
      console.log(result)
      this.ngOnInit();
    
    })

  }
  deleteShow(id:string){
    this.ser.showDelete=true
    this.ser.showDeleteId=id
    let dialogRef=this.dialog.open(ShowUpdateComponent)
    dialogRef.afterClosed().subscribe(result=>{
      this.ser.showDelete=false 
      console.log(result)
      this.ngOnInit();
     
    })
  
  }



}
