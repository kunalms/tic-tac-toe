import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignUpRoutingModule} from './sign-up-routing.module';
import {SignUpComponent} from './sign-up.component';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {SharedModule} from '../../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    SharedModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatTabsModule,
    MatSnackBarModule
  ]
})
export class SignUpModule {
}
