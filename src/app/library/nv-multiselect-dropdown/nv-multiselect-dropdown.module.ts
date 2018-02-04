import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvMultiselectDropdownComponent } from './nv-multiselect-dropdown.component';
import { MatFormFieldModule, MatSelectModule, MatButtonModule, MatTooltipModule, MatIconModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NvCoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NvCoreModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports:[
    NvMultiselectDropdownComponent
  ],
  declarations: [
    NvMultiselectDropdownComponent
  ]
})
export class NvMultiselectDropdownModule { }
