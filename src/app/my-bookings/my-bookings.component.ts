import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
public book:any
  constructor(public ser:ServiceService) { }

  ngOnInit(): void {
this.ser.getDetailsUser(this.ser.UserId).subscribe((data)=>{
console.log(data)
this.book=data
})
  }
  Delete(id:string){
    this.ser.deleteDetailsUser(id).subscribe((data)=>{
      console.log(data)
    })
  }
}
