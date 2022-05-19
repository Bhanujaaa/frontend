import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/admin/admin-service.service';

@Component({
  selector: 'app-location-update',
  templateUrl: './location-update.component.html',
  styleUrls: ['./location-update.component.css']
})
export class LocationUpdateComponent implements OnInit {
public cityName!:string
  constructor(public ser:AdminServiceService) { }

  ngOnInit(): void {
    if(this.ser.cityEdit==true){
      console.log(this.ser.cityEdit)
      this.ser.getCityId(this.ser.cityEditId).subscribe((data:any)=>{
        this.cityName=data.cityName
        console.log(data)
    })
  }
  }
  addCity(){
    let credentials = {
      cityName:this.cityName
    }
    this.ser.postCity(credentials).subscribe((data)=>{
console.log(data)
    })
  }
  editCity(){
    let credentials = {
      cityName:this.cityName
    }
    let _id=this.ser.cityEditId
    this.ser.editCity(credentials,_id).subscribe((data)=>{
      console.log(data)
    })
  }
  deleteCity(){
    let id=this.ser.cityDeleteId
    this.ser.deleteCity(id).subscribe((data)=>{
        console.log(data)
      })

  }
}
