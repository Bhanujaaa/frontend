import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../user/role.guard';
import { BookingsComponent } from './bookings/bookings.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { LocationsComponent } from './locations/locations.component';
import { MoviesComponent } from './movies/movies.component';
import { SeatsComponent } from './seats/seats.component';
import { ShowssComponent } from './showss/showss.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'movie',component:MoviesComponent,canActivate:[RoleGuard]},
  {path:'cinema',component:CinemasComponent,canActivate:[RoleGuard]},
  {path:'location',component:LocationsComponent,canActivate:[RoleGuard]},
  {path:'user',component:UserComponent,canActivate:[RoleGuard]},
  {path:'showss',component:ShowssComponent,canActivate:[RoleGuard]},
  {path:'seat',component:SeatsComponent,canActivate:[RoleGuard]},
  {path:'book',component:BookingsComponent,canActivate:[RoleGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
