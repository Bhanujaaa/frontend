import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import {NgToastService} from 'ng-angular-popup'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
public cost!:number
  constructor(public ser:ServiceService, public router:Router,private toast:NgToastService) { }

  ngOnInit(): void {
  this.cost=this.ser.costuu
  console.log(this.cost)
  }
  next(){
    this.toast.success({detail:"success Message",summary:"Your Seats are Booked!!",duration:5000})
    this.router.navigateByUrl('user/reserved')
  }

}
