import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-location-update',
  templateUrl: './location-update.component.html',
  styleUrls: ['./location-update.component.css']
})
export class LocationUpdateComponent implements OnInit {
public cityName!:string
  constructor(public ser:AdminServiceService,private toast:NgToastService) { }

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
      this.toast.success({detail:"success Message",summary:"City is Added!!",duration:5000})
    })
  }
  editCity(){
    let credentials = {
      cityName:this.cityName
    }
    let _id=this.ser.cityEditId
    this.ser.editCity(credentials,_id).subscribe((data)=>{
      this.toast.success({detail:"success Message",summary:"Updated successfully!!",duration:5000})
    })
  }
  deleteCity(){
    let id=this.ser.cityDeleteId
    this.ser.deleteCity(id).subscribe((data)=>{
      this.toast.success({detail:"success Message",summary:"City is Deleted!!",duration:5000})
      })

  }
}
