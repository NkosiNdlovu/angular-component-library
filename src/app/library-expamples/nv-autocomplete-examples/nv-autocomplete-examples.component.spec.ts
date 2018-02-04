import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvAutocompleteExamplesComponent } from './nv-autocomplete-examples.component';

describe('NvAutocompleteExamplesComponent', () => {
  let component: NvAutocompleteExamplesComponent;
  let fixture: ComponentFixture<NvAutocompleteExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvAutocompleteExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvAutocompleteExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
