import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangesroutRoutingModule } from './changesrout-routing.module';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    UpdatemovieComponent
  ],
  imports: [
    CommonModule,
    ChangesroutRoutingModule,
    MatCardModule,
    BrowserAnimationsModule 
  ]
})
export class ChangesroutModule { }
