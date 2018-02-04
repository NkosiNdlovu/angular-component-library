import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

import {
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material';

import { NvCoreModule } from "../core/core.module";
import { AutoCompleteComponent } from "./autocomplete.component";

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatToolbarModule,
    NvCoreModule
   ],
  exports: [ AutoCompleteComponent ],
  declarations: [
    AutoCompleteComponent,
   ],
  providers:    [  ]
})
export class NvAutoCompleteComponentModule { }
