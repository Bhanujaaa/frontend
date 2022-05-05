import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table'
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatFormFieldModule} from '@angular/material/form-field'
import{ MatInputModule} from '@angular/material/input'
import{MatButtonModule} from '@angular/material/button'
import { MatPaginator } from '@angular/material/paginator';
import{MatDatepickerModule} from '@angular/material/datepicker'
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import{MatToolbarModule} from '@angular/material/toolbar'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCheckboxModule,
    
    // MatNativeDateModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatPseudoCheckboxModule,
    NoopAnimationsModule,
  ],
  exports:[

  ]
})
export class MaterialModule { }
