import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MultiRoutingModule} from './multi-routing.module';
import {MultiComponent} from './multi.component';
import {MatTabsModule} from '@angular/material/tabs';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {NewGameDialogComponent} from './new-game-dialog/new-game-dialog.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [MultiComponent, NewGameDialogComponent],
  imports: [
    CommonModule,
    MultiRoutingModule,
    MatTabsModule,
    FlexLayoutModule,
    MatCardModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class MultiModule {
}
