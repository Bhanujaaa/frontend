import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
public cost!:number
  constructor(public ser:ServiceService, public router:Router) { }

  ngOnInit(): void {
  this.cost=this.ser.costuu
  console.log(this.cost)
  }
  next(){
    this.router.navigateByUrl('user/reserved')
  }

}
