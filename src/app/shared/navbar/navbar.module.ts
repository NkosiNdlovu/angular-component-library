// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatMenuModule} from '@angular/material';
import { RouterModule } from '@angular/router';

// Custom imports
import { NavbarComponent } from './navbar.component';
import {ThemePickerModule} from '../theme-picker/theme-picker';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatMenuModule, 
    RouterModule, 
    ThemePickerModule,
  ],
  exports:[
    NavbarComponent
  ],
  declarations: [NavbarComponent]
})
export class NavbarModule { }
