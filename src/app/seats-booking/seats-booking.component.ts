import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Seats } from '../Seats';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ShowtimeComponent } from '../showtime/showtime.component';

@Component({
  selector: 'app-seats-booking',
  templateUrl: './seats-booking.component.html',
  styleUrls: ['./seats-booking.component.css']
})
export class SeatsBookingComponent implements OnInit {
  public rows: any;
  public seats: any;
  // public seatsselected
  public seatAvailable: any;
  private reservedSeats: any;
  // private refresh!: EventEmitter<void>;
  @Output()
  refresh: EventEmitter<void> = new EventEmitter();

  constructor(private seatService: ServiceService, private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.rows = [];
    this.seats = [];
    this.loadData();
    this.refresh.subscribe(() => {
      this.loadData();
    });

  }
  public loadData() {
    this.seatService.getAllSeats().subscribe((data: any) => {
      if (data && data.length !== 0) {
        this.seatAvailable = data;
        for (let i = 0; i < data.length; i++) {
          let seatName = data[i].seatNum
          this.rows.push(seatName[0])
          this.seats.push(seatName[1])
          let unique = this.rows.filter((item: any, i: any, ar: string | any[]) => ar.indexOf(item) === i);
          this.rows = unique
          let unique1 = this.seats.filter((item: any, i: any, ar: string | any[]) => ar.indexOf(item) === i);
          this.seats = unique1


        }
        this.getReservedSeats();
      } else {
        this.addSeatDetails();
      }
    },
      (err) => console.log('some error occured'));
  }
  private getReservedSeats() {
    this.reservedSeats = this.seatAvailable.filter((seat: { isSelected: boolean; }) => seat.isSelected === true).map((seat: { seatNum: any; }) => seat.seatNum).slice();
  }
  public isSeatReserved(seatNum: String) {
    if (this.reservedSeats) {
      return this.reservedSeats.includes(seatNum);
    }
    return null;
  }
  public addSeatDetails() {
    const seatsNumber: any = [];

    this.rows.forEach((eachRow: any) => {
      this.seats.forEach((eachSeat: any) => {
        seatsNumber.push(new Seats(eachRow.concat(eachSeat.toString()), false));
      })
    })
    this.seatService.addSeatsDetail(seatsNumber).subscribe((data: Array<Seats>) => {
      this.seatAvailable = data;
    });
  }
  public checkSeatStatus(seatNum: String) {
    if (this.seatAvailable) {
      for (let eachSeat of this.seatAvailable) {
        if (eachSeat.seatNum === seatNum) {
          return eachSeat.isSelected;
        }
      };
    }
    return false;

  }
  public seatSelect(seatNo: String) {
    this.toggleSeatSelect(seatNo);
  

  }
  public toggleSeatSelect(seatNo: String) {
    if (seatNo) {
      let toggleSeat = this.seatAvailable.filter((value: { seatNum: String; }) => value.seatNum === seatNo);
      toggleSeat[0].isSelected = !toggleSeat[0].isSelected;
      if(toggleSeat[0].isSelected){
        console.log("selected")

      }
    }
  }
  private submitBooking(selectedSeats: any,seatsBooked:any) {
    console.log('submitted');
    console.log(selectedSeats)
    this.seatService.bookSeat(selectedSeats).subscribe(() => {
      this.refresh.emit();
    });
  }
  public Booked(seatsBooked:number){
    this.seatService.reserve(seatsBooked).subscribe((data)=>{
      let price=data[0].ticketPrice
      let cost=seatsBooked*price
      this.seatService.confirm(seatsBooked,price,cost).subscribe((data)=>{
        console.log(data)
        
      })
    })

  }
  public openDialog(): void {
    const selectedSeats = this.seatAvailable.filter((value: { isSelected: any; }) => value.isSelected);
    // used to check if any new seat has been selected or not
    // console.log(selectedSeats.length+"ghjj")
    if (selectedSeats.length === this.reservedSeats.length) {
      this.snackBar.open('Please select at leas one seat', 'dismiss', { duration: 1000 });
      return;
    }
    const dialogRef = this.dialog.open(ShowtimeComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((status) => {
      if (status === 'success') {
        this.snackBar.open('Booked', 'dismiss', {
          duration: 1000
        });
        const seatsBooked=selectedSeats.length - this.reservedSeats.length
        console.log(selectedSeats.length - this.reservedSeats.length + "seats")
        this.submitBooking(selectedSeats,seatsBooked);
        this.Booked(seatsBooked)
      } else if (status === 'fail') {
        this.snackBar.open('Error occured.', 'dismiss');
      } else {
        this.snackBar.open('Failed please try again', 'dismiss', {
          duration: 1000
        });
      }

    },
      (err) => {
        this.snackBar.open('Error occured. Please check your email settings and please enable allow less secure app in gmail');
      });
  }





}

