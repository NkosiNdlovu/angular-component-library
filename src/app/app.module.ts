//Angular imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Library components imports
import { NvMultiselectDropdownModule } from './library/nv-multiselect-dropdown/nv-multiselect-dropdown.module';

// Other imports

import {ComponentCategoryListModule} from './pages/component-category-list/component-category-list';
import { AppComponent } from './app.component';
import { ThemePickerModule } from './shared/theme-picker/theme-picker';
import { NavbarModule } from './shared/navbar/navbar.module';
import { MatButtonModule, MatSelect, MatSelectModule } from '@angular/material';
import { StyleManager } from './shared/style-manager/style-manager';
import { APP_ROUTES } from './app-routes';
import { HomepageModule } from './pages/homepage/homepage';
import { ComponentSidenavModule } from './pages/component-sidenav/component-sidenav';
import { SvgViewerModule } from './shared/svg-viewer/svg-viewer';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CanActivateComponentSidenav } from './pages/component-sidenav/component-sidenav-can-load-guard';
import { ThemeStorage } from './shared/theme-picker/theme-storage/theme-storage';
import { FooterModule } from './shared/footer/footer';
import { ComponentListModule } from './pages/component-list/index';
import { ComponentViewerModule } from './pages/component-viewer/component-viewer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    FormsModule,
    HttpModule,
    HttpClientModule,
    
    FooterModule,
    ComponentListModule,

    ComponentViewerModule,
    ComponentCategoryListModule,
    NvMultiselectDropdownModule,
    HomepageModule,
    ThemePickerModule,
    MatButtonModule,
    MatSelectModule,
    NavbarModule,
    SvgViewerModule,
    ComponentSidenavModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    StyleManager,
    ThemeStorage, 
    CanActivateComponentSidenav,
    {provide: LocationStrategy, useClass: PathLocationStrategy},],
  bootstrap: [AppComponent]
})

export class AppModule { }

