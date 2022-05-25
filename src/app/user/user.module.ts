import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table'
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
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
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ReservedComponent } from './reserved/reserved.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FlexLayoutModule} from '@angular/flex-layout'
console.log("user module loaded")

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ReservedComponent,
  


  ],
  imports: [
    UserRoutingModule,
    FormsModule,
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSliderModule,
    MatPseudoCheckboxModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule
  ],
  exports:[
    LoginComponent,
    HomeComponent,
    RegisterComponent,

  ]
})
export class UserModule { }
