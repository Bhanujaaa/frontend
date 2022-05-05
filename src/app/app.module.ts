import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './user/home/home.component';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { UserService } from './core/services/user.service';
import { ShowtimeComponent } from './showtime/showtime.component';
import {MatIconModule} from '@angular/material/icon';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table'
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatFormFieldModule} from '@angular/material/form-field'
import{ MatInputModule} from '@angular/material/input'
import{MatButtonModule} from '@angular/material/button'
import { MatPaginator } from '@angular/material/paginator';
import{MatDatepickerModule} from '@angular/material/datepicker'
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import{MatToolbarModule} from '@angular/material/toolbar'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ServiceService } from './service.service';
import { ShowtimeListComponent } from './showtime-list/showtime-list.component';
import { Usecase2Component } from './usecase2/usecase2.component';
import { LocationComponent } from './location/location.component';
import { MoviesComponent } from './movies/movies.component';
import {PipePipe} from './core/pipes/pipe.pipe';

import { SeatsBookingComponent } from './seats-booking/seats-booking.component';
@NgModule({
  declarations: [
    AppComponent,
    ShowtimeComponent,
    ShowtimeListComponent,
    Usecase2Component,
    LocationComponent,
    MoviesComponent,
    PipePipe,
    SeatsBookingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UserModule,
    SharedModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSliderModule,
    // MatPaginator,
    MatPseudoCheckboxModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
  
    
  ],
  exports:[
  
  ],
  providers: [UserService,ServiceService,PipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
