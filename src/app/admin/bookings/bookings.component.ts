import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(public ser:AdminServiceService,public service:ServiceService) { }
public book:any
  ngOnInit(): void {
    this.ser.getReserve().subscribe((data)=>{
      this.book=data
          })
  }

}
