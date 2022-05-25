import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { SeatUpdateComponent } from 'src/app/updates/seat-update/seat-update.component';
import { AdminServiceService } from '../admin-service.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
public seat:any
  constructor(public ser:AdminServiceService, public dialog:MatDialog, private toast:NgToastService,public router:Router,public service:ServiceService) { }

  ngOnInit(): void {
    this.ser.getSeat().subscribe((data)=>{
      this.seat=data
          })
  }
  // getSeat(){
    
  // }
  addSeat(){
    this.ser.seatAdd=true
    let dialogRef=this.dialog.open(SeatUpdateComponent)
    dialogRef.afterClosed().subscribe(result=>{
console.log(result)
this.ser.seatAdd=false
this.ngOnInit();
    })
   
    
  }
 
  editSeat(id:string){
    this.ser.seatEdit=true
    this.ser.seatEditId=id
    let dialogRef=this.dialog.open(SeatUpdateComponent)
    dialogRef.afterClosed().subscribe(result=>{
      this.ser.seatEdit=false
      console.log(result)
      this.ngOnInit();
    })
    
// this.ser.editMovies(id).subscribe((data)=>{
//   console.log(data)
// })
  }
  deleteSeat(id:string){
    this.ser.seatDelete=true
    this.ser.seatDeleteId=id
    let dialogRef=this.dialog.open(SeatUpdateComponent)
    dialogRef.afterClosed().subscribe(result=>{
      this.ser.seatDelete=false 
      console.log(result)
      this.ngOnInit();
      
      // window.location.reload();
      
        // this.ngOnInit();
    })
    // this.router.navigate(['./admin/seat']);
    
    // this.ser.deleteMovies(id).subscribe((data)=>{
    //   console.log(data)
    // })
    // let dialogRef=this.dialog.open(MovieUpdateComponent)
    // dialogRef.afterClosed().subscribe(result=>{
    //   this.ser.movieDelete=false
    //   console.log(result)
    // })
  }
  openDialog(){
    
  }


}
