import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AdminRoutingModule } from './admin-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { LocationsComponent } from './locations/locations.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { UserComponent } from './user/user.component';
import { MatFormFieldControl,MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ShowssComponent } from './showss/showss.component';
import { SeatsComponent } from './seats/seats.component';
import { BookingsComponent } from './bookings/bookings.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    MoviesComponent,
    LocationsComponent,
    CinemasComponent,
    UserComponent,
    ShowssComponent,
    SeatsComponent,
    BookingsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatTabsModule,
  ],
  exports:[
    MoviesComponent,
    LocationsComponent,
    CinemasComponent,
    UserComponent,
    
  ]

})
export class AdminModule { }
