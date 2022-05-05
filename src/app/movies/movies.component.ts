import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { city } from '../location';
import { movies } from '../movies';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies!:movies[]
  constructor(private ser:ServiceService) { }

  ngOnInit(): void {
    this.ser.getMovies().subscribe((data:movies[])=>{
      this.movies=data
    })

  }


}
