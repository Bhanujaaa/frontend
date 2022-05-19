import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service.service';
import { UserUpdateComponent } from 'src/app/updates/user-update/user-update.component';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
public user:any
  constructor(public ser:AdminServiceService, public dialog:MatDialog,public service:ServiceService) { }

  ngOnInit(): void {
    this.ser.getUser().subscribe((data)=>{
      // console.log(data)
      this.user=data
          })
  }
  deleteUser(id:string){
    this.ser.userDelete=true
    this.ser.userDeleteId=id
    let dialogRef=this.dialog.open(UserUpdateComponent)
    dialogRef.afterClosed().subscribe(result=>{
      this.ser.userDelete=false 
      console.log(result)
      this.ngOnInit();
    })
  }

}
