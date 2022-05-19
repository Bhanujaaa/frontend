import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { showtime } from '../showtime';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.css']
})
export class ShowtimeComponent implements OnInit {
  public loading=true;
  public errorMsg!:string;
  public successMsg!:string;
  public show!:showtime[]
  public columns=['startAt','startDate','endDate','cancel']
  constructor(private ser:ServiceService,public dialogRef: MatDialogRef<ShowtimeComponent>) { }

  ngOnInit(): void {
    this.ser.getShowtime().subscribe((show:showtime[])=>{
      this.show=show
      console.log(show)
      console.log("hi ra i am show time")
      console.log(this.show[0].cinemaId)
      this.loading=false
      this.dialogRef.close('success');
    },
    (error:ErrorEvent)=>{
      this.errorMsg=error.error.message
      this.loading=false
      this.dialogRef.close('fail');
    }
    )

  }
  
}
