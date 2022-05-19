
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-cinema-update',
  templateUrl: './cinema-update.component.html',
  styleUrls: ['./cinema-update.component.css']
})
export class CinemaUpdateComponent implements OnInit {
public name!:string
public movieId!:string
public moviename!:string
public city!:string
public ticketPrice!:number
public image!:string
public address!:string
public cityN:any
public movieN:any
  constructor(public ser:AdminServiceService,public service:ServiceService) { }

  ngOnInit(): void {
    this.service.getCity().subscribe((data: any) => {
      this.cityN= data
      console.log(this.cityN)
      // this.loading=false
    })
    this.service.getMovies().subscribe((data:any)=>{
      this.movieN=data
    })
    if(this.ser.cineEdit==true){
      console.log(this.ser.cineEdit)
      
   
      this.ser.getCineId(this.ser.cineEditId).subscribe((data:any)=>{
        this.name=data[0].name,
        this.movieId=data[0].movieId,
        this.moviename=data[0].moviename,
        this.city=data[0].city.cityName,
        this.ticketPrice=data[0].ticketPrice,
        this.image=data[0].image
        this.address=data[0].address
        console.log(data)
    })
  }
}
  AddCine(){
    let credentials = {
      name: this.name,
      movieId:this.movieId,
      moviename: this.moviename,
      city:this.city,
      ticketPrice:this.ticketPrice,
      image:this.image,
      address:this.address
    }
    this.ser.postCine(credentials).subscribe((data)=>{
console.log(data)
    })
  }
  editCine(){
    let credentials = {
      name: this.name,
      movieId:this.movieId,
      moviename: this.moviename,
      city:this.city,
      ticketPrice:this.ticketPrice,
      image:this.image,
      address:this.address
    }
    let _id=this.ser.cineEditId
    this.ser.editCine(credentials,_id).subscribe((data)=>{
      
    })
  }
  deleteCine(){
    let id=this.ser.cineDeleteId
    this.ser.deleteCine(id).subscribe((data)=>{
        console.log(data)
      })

  }


}
