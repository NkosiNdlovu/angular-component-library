import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocsAppTestingModule} from '../../testing/testing-module';
import { NavbarComponent } from './navbar.component';
import { NavbarModule } from './navbar.module';


describe('NavBar', () => {
  let fixture: ComponentFixture<NavbarComponent>;
  let component: NavbarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NavbarModule, DocsAppTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Note: Add tests is logic is added to navbar class.
});