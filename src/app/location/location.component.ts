import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {city} from '../location'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
public city!:city[];
  constructor(private ser:ServiceService) { }

  ngOnInit(): void {
    this.ser.getCity().subscribe((data:city[])=>{
      this.city=data
    })

  }
}
