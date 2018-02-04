import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvMultiselectDropdownComponent } from './nv-multiselect-dropdown.component';

describe('NvMultiselectDropdownComponent', () => {
  let component: NvMultiselectDropdownComponent;
  let fixture: ComponentFixture<NvMultiselectDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvMultiselectDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvMultiselectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
