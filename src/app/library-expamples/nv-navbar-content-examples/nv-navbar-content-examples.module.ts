import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { NvNavbarContentExamplesComponent } from './nv-navbar-content-examples.component';
import { NvBasicNavbarContentComponent } from '../../library/nv-navbar-content/basic/nv-basic-navbar-content.component';
import { NvCoreModule } from '../../library/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    NvCoreModule,
    NvBasicNavbarContentComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[NvNavbarContentExamplesComponent],
  declarations: [NvNavbarContentExamplesComponent]
})
export class NvLayoutExamplesModule { }
