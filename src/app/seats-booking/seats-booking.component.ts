import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Seats } from '../Seats';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ShowtimeComponent } from '../showtime/showtime.component';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-seats-booking',
  templateUrl: './seats-booking.component.html',
  styleUrls: ['./seats-booking.component.css']
})
export class SeatsBookingComponent implements OnInit {
  public rows: any;
  public seats: any;
  public seatno: any
  // public seatsselected
  public seatAvailable: any;
  private reservedSeats: any;
  // public cinema:any
  public show: any
  public left!: number;
  public fullSeats: any
  // private refresh!: EventEmitter<void>;
  @Output()
  refresh: EventEmitter<void> = new EventEmitter();

  constructor(public seatService: ServiceService, private dialog: MatDialog,
    private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.rows = [];
    this.seats = [];
    this.seatno = [];
    this.loadData();
    this.refresh.subscribe(() => {
      this.loadData();
    });

  }
  // [seatNum:A1
  // isSelected:true]
  // [seatNum:A2
  // isSelected:false]


  public loadData() {
    let id = this.seatService.put()
    this.seatService.getSeats(id).subscribe((data: any) => {
      this.show = data
      // console.log(data)
      // for(let i=0;i<data.length;i++){
      this.seatAvailable = data.seats
      console.log(data.seats)

      // }
      if (this.seatAvailable && this.seatAvailable.length !== 0) {
        for (let j = 0; j < this.seatAvailable.length; j++) {
          let seatName = this.seatAvailable[j].seatNum
          this.rows.push(seatName[0])
          this.seats.push(seatName[1])
          let unique = this.rows.filter((item: any, i: any, ar: string | any[]) => ar.indexOf(item) === i);
          this.rows = unique
          let unique1 = this.seats.filter((item: any, i: any, ar: string | any[]) => ar.indexOf(item) === i);
          this.seats = unique1


        }
        this.getReservedSeats()
      }
      else {
        this.addSeatDetails();
      }
      // if (data && data.length !== 0) {
      //   // this.seatAvailable = data;
      //   for (let i = 0; i < data.length; i++) {
      //     let seatName = data[i].seatNum
      //     // data[i].isSelected=false
      //     this.rows.push(seatName[0])
      //     this.seats.push(seatName[1])
      //     let unique = this.rows.filter((item: any, i: any, ar: string | any[]) => ar.indexOf(item) === i);
      //     this.rows = unique
      //     let unique1 = this.seats.filter((item: any, i: any, ar: string | any[]) => ar.indexOf(item) === i);
      //     this.seats = unique1


      //   }
      //   this.seatAvailable=data
      //   this.getReservedSeats();
      // } else {
      //   this.addSeatDetails();
      // }
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
    console.log(seatNo)
    console.log("above is the seat number")


  }
  public toggleSeatSelect(seatNo: String) {
    if (seatNo) {
      let toggleSeat = this.seatAvailable.filter((value: { seatNum: String; }) => value.seatNum === seatNo);
      toggleSeat[0].isSelected = !toggleSeat[0].isSelected;
      if (toggleSeat[0].isSelected) {
        console.log("selected")
        // console.log(seatNo)
        this.seatno.push(seatNo)


      }
      if (!toggleSeat[0].isSelected) {
        const index = this.seatno.indexOf(seatNo, 0);
        if (index > -1) {
          this.seatno.splice(index, 1);
        }
      }
      // console.log(this.seatno)
    }
  }
  private submitBooking(selectedSeats: any, seatsBooked: any) {
    console.log('submitted');
    console.log(selectedSeats)
    this.seatService.bookSeat(selectedSeats).subscribe(() => {
      this.refresh.emit();
    });
    // this.freeSeats();
  }
  public freeSeat() {
    console.log(this.seatAvailable)
    const selectedSeats = this.seatAvailable.filter((value: { isSelected: true; }) => value.isSelected);
    const reserved = this.seatAvailable.filter((value: { isSelected: false; }) => !value.isSelected);
    this.fullSeats = (selectedSeats.length + reserved.length)
    console.log(reserved.length)
    this.seatService.seatUpdate(this.fullSeats, this.show._id).subscribe(() => {
      console.log("freeseatupdate")
      console.log(selectedSeats)
      this.seatService.release(selectedSeats).subscribe(() => {
        console.log("freed")
      })
    })

  }
  public Booked(seatsBooked: number) {
    // this.seatService.reserve(this.cinema._id).subscribe((data)=>{
    let price = this.show.ticketPrice
    let cost = seatsBooked * price
    let Booked = seatsBooked
    let remain = this.show.seatsAvailable
    let leftout = remain - Booked
    console.log(leftout); console.log(seatsBooked)
    this.seatService.changeCinemaSeat(leftout, this.show._id)
    console.log(this.show.cinemaId)
    this.seatService.confirm(seatsBooked, price, cost, this.show._id, this.show.cinemaId, this.show.movieId, this.seatService.UserId,this.seatno).subscribe((data) => {
      console.log(data)
      console.log(data._id)
      this.seatService.getReserveId(data._id, cost)
      // console.log("sdafllsfjlsjadklfjklsafioeawfiowefjsdn")

      this.router.navigateByUrl('user/reserved')


    })

  }
  public openDialog(): void {
    const selectedSeats = this.seatAvailable.filter((value: { isSelected: true; }) => value.isSelected);
    const seatsBooked = selectedSeats.length - this.reservedSeats.length
    let price = this.show.ticketPrice
    console.log("selected seats are given below")
    console.log(this.seatno)
    let cost = seatsBooked * price
    this.seatService.costuu = cost
    // used to check if any new seat has been selected or not
    // console.log(selectedSeats.length+"ghjj")
    if (selectedSeats.length === this.reservedSeats.length) {
      this.snackBar.open('Please select at leas one seat', 'dismiss', { duration: 1000 });
      return;
    }
    // this.seatService.openConfirmDialog();
    let dialogRefe = this.dialog.open(DialogComponent);
    dialogRefe.afterClosed().subscribe(result => {
      // console.log(`${result}`)
      if (`${result}` == "Ok") {
        console.log("Ok");
        this.last()
      }
    })

  }
  public last() {
    const selectedSeats = this.seatAvailable.filter((value: { isSelected: true; }) => value.isSelected);
    console.log("hi dialog")
    const seatsBooked = selectedSeats.length - this.reservedSeats.length
    console.log(selectedSeats.length - this.reservedSeats.length + "seats")
    this.submitBooking(selectedSeats, seatsBooked);
    this.Booked(seatsBooked)
  }

}

