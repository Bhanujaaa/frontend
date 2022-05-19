import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service.service';
import { LocationUpdateComponent } from 'src/app/updates/location-update/location-update.component';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
public loc:any
  constructor(public ser:AdminServiceService, public dialog:MatDialog,public service:ServiceService) { }

  ngOnInit(): void {
    this.ser.getCity().subscribe((data)=>{
      this.loc=data
          })
  }
  addCity(){
    this.ser.cityAdd=true
    let dialogRef=this.dialog.open(LocationUpdateComponent)
    dialogRef.afterClosed().subscribe(result=>{
console.log(result)
this.ser.cityAdd=false
this.ngOnInit();
    })
    
  }
  editCity(id:string){
    this.ser.cityEdit=true
    this.ser.cityEditId=id
    let dialogRef=this.dialog.open(LocationUpdateComponent)
    dialogRef.afterClosed().subscribe(result=>{
      this.ser.cityEdit=false
      console.log(result)
      this.ngOnInit();
    })
    
// this.ser.editMovies(id).subscribe((data)=>{
//   console.log(data)
// })
  }
  deleteCity(id:string){
    this.ser.cityDelete=true
    this.ser.cityDeleteId=id
    let dialogRef=this.dialog.open(LocationUpdateComponent)
    dialogRef.afterClosed().subscribe(result=>{
      this.ser.cityDelete=false 
      console.log(result)
      this.ngOnInit();
    })
  // deleteCity(id:string){
  //   this.ser.cityDelete=true
  //   this.ser.cityDeleteId=id
  //   this.ser.deleteCity(id).subscribe((data)=>{
  //     console.log(data)
  //   })
    // let dialogRef=this.dialog.open(MovieUpdateComponent)
    // dialogRef.afterClosed().subscribe(result=>{
    //   this.ser.movieDelete=false
    //   console.log(result)
    // })
  }
  openDialog(){
    
  }


}
