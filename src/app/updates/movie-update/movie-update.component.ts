import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
import { ServiceService } from 'src/app/service.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {
public title!:string;
public image!:string;
public language!:string;
public genre!:string;
public director!:string;
public cast!:string;
public description!:string;
public duration!:string
  constructor(public ser:AdminServiceService,private toast:NgToastService) { }

  ngOnInit(): void {
    if(this.ser.movieEdit==true){
      console.log(this.ser.movieEdit)
      this.ser.getMoviesId(this.ser.movieEditId).subscribe((data:any)=>{
        this.title=data.title,
        this.language=data.language,
        this.genre=data.genre,
        this.director=data.director,
        this.cast=data.cast,
        this.description=data.description,
        this.image=data.image
        console.log(data)
    })
    }

  }
  AddMovie(){
    let credentials = {
      title: this.title,
      language: this.language,
      genre:this.genre,
      director:this.director,
      cast:this.cast,
      description:this.description,
      duration:this.duration,
      image:this.image
    }
    this.ser.postMovies(credentials).subscribe((data)=>{
      this.toast.success({detail:"success Message",summary:"Movie is Added!!",duration:5000})
    })
  }
  editMovie(){
    let credentials = {
      title: this.title,
      language: this.language,
      genre:this.genre,
      director:this.director,
      cast:this.cast,
      description:this.description,
      duration:this.duration,
      image:this.image
    }
    let _id=this.ser.movieEditId
    this.ser.editMovies(credentials,_id).subscribe((data)=>{
      this.toast.success({detail:"success Message",summary:"Updated successfully!!",duration:5000})
    })
  }
  deleteMovie(){
    let id=this.ser.movieDeleteId
    this.ser.deleteMovies(id).subscribe((data)=>{
      this.toast.success({detail:"success Message",summary:"Movie is Deleted!!",duration:5000})
      })

  }

}
