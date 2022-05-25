import { Component, OnInit } from '@angular/core';
import { MovieUpdateComponent } from 'src/app/updates/movie-update/movie-update.component';
import { AdminServiceService } from '../admin-service.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdatemovieComponent } from 'src/app/changesrout/updatemovie/updatemovie.component';
import { ServiceService } from 'src/app/service.service';
import {NgToastService} from 'ng-angular-popup';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
public movie:any 
  constructor(public ser:AdminServiceService, private dialog: MatDialog,public service:ServiceService,private toast:NgToastService) { }

  ngOnInit(): void {
    this.ser.getMovies().subscribe((data)=>{
      
this.movie=data
    })
  }
  addMovie(){
    this.ser.movieAdd=true
    let dialogRef=this.dialog.open(MovieUpdateComponent)
    dialogRef.afterClosed().subscribe(result=>{
console.log(result)
this.ser.movieAdd=false

this.ngOnInit();

    
    })
    
  }
  editMovie(id:string){
    this.ser.movieEdit=true
    this.ser.movieEditId=id
    let dialogRef=this.dialog.open(MovieUpdateComponent)
    dialogRef.afterClosed().subscribe(result=>{
      this.ser.movieEdit=false
      console.log(result)
      this.ngOnInit();
     
    })
    

  }
  deleteMovie(id:string){
    this.ser.movieDelete=true
    this.ser.movieDeleteId=id
    let dialogRef=this.dialog.open(MovieUpdateComponent)
    dialogRef.afterClosed().subscribe(result=>{
      this.ser.movieDelete=false 
      console.log(result)
      this.ngOnInit();
     
    
    })
    
  }
  

}
