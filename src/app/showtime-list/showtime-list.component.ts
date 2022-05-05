import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { showtime } from '../showtime';

@Component({
  selector: 'app-showtime-list',
  templateUrl: './showtime-list.component.html',
  styleUrls: ['./showtime-list.component.css']
})
export class ShowtimeListComponent implements OnInit {
  public successMsg!: string;
  public errorMsg!: string;
  startAt!: string;
  startDate!: Date;
  endDate!: Date;
  constructor(private ser:ServiceService) { }

  ngOnInit(): void {
  }
CreateShowtime(){
  this.successMsg = '';
    this.errorMsg = '';
    this.ser.CreateShowtime(this.startAt, this.startDate, this.endDate)
      .subscribe((show: showtime) => {
        this.startAt = '';
        this.startDate =new Date();
        this.endDate = new Date(show.startAt);
        // const appointmentDate = new Date(show.startAt).toDateString();
        this.successMsg = `Appointment Booked Successfully for ${this.endDate}`;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }
}

