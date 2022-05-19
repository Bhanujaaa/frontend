import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatsBookingComponent } from '../seats-booking/seats-booking.component';
import { Usecase2Component } from '../usecase2/usecase2.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReservedComponent } from './reserved/reserved.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'show',component:Usecase2Component, canActivate:[AuthGuard]},
  {path:'seat',component:SeatsBookingComponent, canActivate:[AuthGuard]},
  {path:'reserved',component:ReservedComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
