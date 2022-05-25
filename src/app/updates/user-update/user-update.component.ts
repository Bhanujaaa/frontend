import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(public ser:AdminServiceService,private toast:NgToastService) { }

  ngOnInit(): void {
  }
  deleteUser(){
    let id=this.ser.userDeleteId
    this.ser.deleteUser(id).subscribe((data)=>{
      this.toast.success({detail:"success Message",summary:"User is deleted!!",duration:5000})
      })

  }

}
