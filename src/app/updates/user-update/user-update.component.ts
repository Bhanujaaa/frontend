import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/admin/admin-service.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(public ser:AdminServiceService) { }

  ngOnInit(): void {
  }
  deleteUser(){
    let id=this.ser.userDeleteId
    this.ser.deleteUser(id).subscribe((data)=>{
        console.log(data)
      })

  }

}
