import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service.service';
import { CinemaUpdateComponent } from 'src/app/updates/cinema-update/cinema-update.component';
import { AdminServiceService } from '../admin-service.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent implements OnInit {
public cine:any
  constructor(public ser:AdminServiceService,private toast:NgToastService, public dialog:MatDialog,public service:ServiceService) { }

  ngOnInit(): void {
    this.ser.getCine().subscribe((data)=>{
  
      this.cine=data  
          })
  }
  addCinema(){
    this.ser.cineAdd=true
    let dialogRef=this.dialog.open(CinemaUpdateComponent)
    dialogRef.afterClosed().subscribe(result=>{

this.ser.cineAdd=false
this.ngOnInit();  

    })
    
  }
  editCinema(id:string){
    this.ser.cineEdit=true
    this.ser.cineEditId=id
    let dialogRef=this.dialog.open(CinemaUpdateComponent)
    dialogRef.afterClosed().subscribe(result=>{
      this.ser.cineEdit=false
      this.ngOnInit();
      
    })
    
// this.ser.editMovies(id).subscribe((data)=>{
//   console.log(data)
// })
  }
  deleteCinema(id:string){
    this.ser.cineDelete=true
    this.ser.cineDeleteId=id
    let dialogRef=this.dialog.open(CinemaUpdateComponent)
    dialogRef.afterClosed().subscribe(result=>{
      this.ser.cineDelete=false 
      this.ngOnInit();
    
    })
  }
}
