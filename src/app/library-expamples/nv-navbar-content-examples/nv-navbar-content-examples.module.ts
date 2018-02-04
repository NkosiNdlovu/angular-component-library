import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvLayoutExamplesComponent } from './nv-layout-examples.component';
import { NvCoreModule } from '../../library/core/core.module';
import { NvAdminLayoutComponentModule } from '../../library/layout/admin/admin-layout.module';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NvCoreModule,
    NvAdminLayoutComponentModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[NvLayoutExamplesComponent],
  declarations: [NvLayoutExamplesComponent]
})
export class NvLayoutExamplesModule { }
