import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { CinemaUpdateComponent } from './cinema-update/cinema-update.component';
import { LocationUpdateComponent } from './location-update/location-update.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { MatButtonModule } from '@angular/material/button';
import { ShowUpdateComponent } from './show-update/show-update.component';
import { SeatUpdateComponent } from './seat-update/seat-update.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { BookingsUpdateComponent } from './bookings-update/bookings-update.component';
@NgModule({
  declarations: [
    MovieUpdateComponent,
    CinemaUpdateComponent,
    LocationUpdateComponent,
    UserUpdateComponent,
    ShowUpdateComponent,
    SeatUpdateComponent,
    BookingsUpdateComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
   
  ],
  exports:[
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
   
  ]
})
export class UpdatesModule { }
