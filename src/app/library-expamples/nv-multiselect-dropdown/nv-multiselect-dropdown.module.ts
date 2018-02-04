import { NvMultiselectDropdownExampleComponent } from './nv-multiselect-dropdown.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvMultiselectDropdownModule } from '../../library/nv-multiselect-dropdown/nv-multiselect-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    NvMultiselectDropdownModule
  ],
  exports:[
    NvMultiselectDropdownExampleComponent
  ],
  declarations: [
    NvMultiselectDropdownExampleComponent
  ]
})
export class NvMultiselectDropdownExampleModule { }
