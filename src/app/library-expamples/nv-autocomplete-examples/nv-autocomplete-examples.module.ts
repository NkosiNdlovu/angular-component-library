import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvAutocompleteExamplesComponent } from './nv-autocomplete-examples.component';
import { NvAutoCompleteComponentModule } from '../../library/nv-autocomplete/autocomplete.module';
import { NvCoreModule } from '../../library/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    NvAutoCompleteComponentModule,
    NvCoreModule
  ],
  exports:[NvAutocompleteExamplesComponent],
  declarations: [NvAutocompleteExamplesComponent]
})
export class NvAutocompleteExamplesModule { }
