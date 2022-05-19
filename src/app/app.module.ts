import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from './core/services/token-interceptor.service';
import { UserService } from './core/services/user.service';
import { ShowtimeComponent } from './showtime/showtime.component';
import {MatIconModule} from '@angular/material/icon';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table'
import {MatSelectModule} from '@angular/material/select';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatFormFieldModule} from '@angular/material/form-field'
import{ MatInputModule} from '@angular/material/input'
import{MatButtonModule} from '@angular/material/button'
import { MatPaginator } from '@angular/material/paginator';
import{MatDatepickerModule} from '@angular/material/datepicker'
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import{MatToolbarModule} from '@angular/material/toolbar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list'
import { ServiceService } from './service.service';
import { ShowtimeListComponent } from './showtime-list/showtime-list.component';
import { Usecase2Component } from './usecase2/usecase2.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LocationComponent } from './location/location.component';
import {PipePipe} from './core/pipes/pipe.pipe';

// import { MatDialogModule } from '@angular/material/dialog';
import { SeatsBookingComponent } from './seats-booking/seats-booking.component';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { DialogComponent } from './dialog/dialog.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { AdminModule } from './admin/admin.module';
import { ChangesroutModule } from './changesrout/changesrout.module';
import { UpdatemovieComponent } from './changesrout/updatemovie/updatemovie.component';
import { UpdatesModule } from './updates/updates.module';



@NgModule({
  declarations: [
    AppComponent,
    ShowtimeComponent,
    ShowtimeListComponent,
    Usecase2Component,
    LocationComponent,
   
    PipePipe,
    SeatsBookingComponent,
    CardsComponent,
    DialogComponent,
    MyBookingsComponent,
   
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ChangesroutModule,
    UpdatesModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
   
    FlexLayoutModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatPseudoCheckboxModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    ReactiveFormsModule
  
    
  ],
  exports:[
  
  ],
  providers: [UserService,ServiceService,PipePipe,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
  entryComponents:[DialogComponent,UpdatemovieComponent,MatDialogModule]
})
export class AppModule { }
