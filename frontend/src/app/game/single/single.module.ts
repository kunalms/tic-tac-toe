import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SingleRoutingModule} from './single-routing.module';
import {SingleComponent} from './single.component';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [SingleComponent],
  imports: [
    CommonModule,
    SingleRoutingModule,
    MatCardModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatTabsModule,
    FlexLayoutModule
  ]
})
export class SingleModule {
}
