import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowtimeListComponent } from './showtime-list/showtime-list.component';
import { ShowtimeComponent } from './showtime/showtime.component';
import { Usecase2Component } from './usecase2/usecase2.component';
import { HomeComponent } from './user/home/home.component';

const routes: Routes = [
  {
    path:'user',
    loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)
  },
  {path:'showtime',
component:Usecase2Component},
{path:'home',component:HomeComponent},
{path:'show',component:ShowtimeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
