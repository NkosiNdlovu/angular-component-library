import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

import { NvCoreModule } from '../../core/core.module';
import { NvBasicNavbarContentComponent } from './nv-basic-navbar-content.component';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    NvCoreModule,
    FlexLayoutModule
   ],
  exports: [ NvBasicNavbarContentComponent ],
  declarations: [
    NvBasicNavbarContentComponent,
   ],
  providers:    [  ]
})
export class NvBasicNavbarContentModule { }
