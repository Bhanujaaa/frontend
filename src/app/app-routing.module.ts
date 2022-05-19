import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';

import { ShowtimeListComponent } from './showtime-list/showtime-list.component';
import { ShowtimeComponent } from './showtime/showtime.component';
import { Usecase2Component } from './usecase2/usecase2.component';
import { HomeComponent } from './user/home/home.component';
import { SeatsBookingComponent } from './seats-booking/seats-booking.component';
import { LoginComponent } from './user/login/login.component';
import { ReservedComponent } from './user/reserved/reserved.component';
import { AuthGuard } from './user/auth.guard';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { RoleGuard } from './user/role.guard';


const routes: Routes = [
  {
    path:'user',
    loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)
  },
  {
path:'admin',
loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule),canActivate:[RoleGuard]
  },
  {path:'details',component:MyBookingsComponent},
  // {path:'login',component:LoginComponent},
  {path:'screen',component:ShowtimeListComponent,canActivate:[AuthGuard]},
  {path:'showtime',
component:Usecase2Component,},
{path:'home',component:HomeComponent},
{path:'res',component:ReservedComponent,canActivate:[AuthGuard]}
// {path:'show',component:ShowtimeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
