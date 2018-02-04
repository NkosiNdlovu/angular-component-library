import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvLayoutExamplesComponent } from './nv-layout-examples.component';

describe('NvLayoutExamplesComponent', () => {
  let component: NvLayoutExamplesComponent;
  let fixture: ComponentFixture<NvLayoutExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvLayoutExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvLayoutExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
