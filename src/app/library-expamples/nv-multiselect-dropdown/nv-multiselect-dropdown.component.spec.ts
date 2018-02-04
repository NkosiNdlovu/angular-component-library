import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvMultiselectDropdownExampleComponent } from './nv-multiselect-dropdown.component';

describe('NvMultiselectDropdownComponent', () => {
  let component: NvMultiselectDropdownExampleComponent;
  let fixture: ComponentFixture<NvMultiselectDropdownExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvMultiselectDropdownExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvMultiselectDropdownExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
