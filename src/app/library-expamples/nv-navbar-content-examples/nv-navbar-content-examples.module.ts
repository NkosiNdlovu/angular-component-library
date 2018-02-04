import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { NvNavbarContentExamplesComponent } from './nv-navbar-content-examples.component';
import { NvCoreModule } from '../../library/core/core.module';
import { NvBasicNavbarContentModule } from '../../library/nv-navbar-content/basic/nv-basic-navbar-content.component.module';

@NgModule({
  imports: [
    CommonModule,
    NvCoreModule,
    NvBasicNavbarContentModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[NvNavbarContentExamplesComponent],
  declarations: [NvNavbarContentExamplesComponent]
})
export class NvNavbarContentExamplesModule { }
