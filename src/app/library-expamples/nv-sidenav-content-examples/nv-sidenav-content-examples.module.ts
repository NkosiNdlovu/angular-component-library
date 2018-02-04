import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { NvCoreModule } from '../../library/core/core.module';
import { NvSidenavExamplesComponent } from './nv-sidenav-content-examples.component';
import { NvAdminSidenavContentModule } from '../../library/nv-sidenav-content/admin/admin-sidenav-content.module';

@NgModule({
  imports: [
    CommonModule,
    NvCoreModule,
    NvAdminSidenavContentModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[NvSidenavExamplesComponent],
  declarations: [NvSidenavExamplesComponent]
})
export class NvLayoutExamplesModule { }
