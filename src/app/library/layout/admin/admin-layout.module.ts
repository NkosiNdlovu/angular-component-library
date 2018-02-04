import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
} from '@angular/material';

import { NvCoreModule } from "../../core/core.module";
import { AdminLayoutComponent } from "./admin-layout.component";

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
  exports: [ AdminLayoutComponent ],
  declarations: [
    AdminLayoutComponent,
   ],
  providers:    [  ]
})
export class NvAdminLayoutComponentModule { }
