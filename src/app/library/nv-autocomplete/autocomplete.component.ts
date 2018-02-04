import { Component, Input, Output, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'nv-autocomplete',
  templateUrl: 'autocomplete.component.html',
})
export class AutoCompleteComponent implements OnInit, OnDestroy {
  selectedItem: any;
  @Input()
  get value(): any {
    return this.selectedItem;
  }
  set value(value: any) {
    this.selectedItem = value;

    if (this.selectedItem === null) {
      this.Clear();
    }
    if (this.selectedItem === undefined) {
      this.Clear();
      this.selectedItem = undefined;
    }

    this.valueChange.emit(this.selectedItem);
  }
  @Input() listItems: any[];
  @Input() autoCompletePlaceholder: any;
  @Input() filterOn: string;
  listFilter: string;
  @Output()
  valueChange: EventEmitter<any> = new EventEmitter<any>();
  itemLable: string;
  ngOnInit() {
    if (this.selectedItem != null) {
      this.itemLable = this.selectedItem[this.filterOn];
    }
  }
  ngOnDestroy() { }

  setSelectedItem(item: any) {
    this.itemLable = "";
    this.itemLable = item[this.filterOn];
    this.value = item;

    this.ValidateFilter();
  }

  Clear() {
    this.selectedItem = null;
    this.itemLable = '';
    this.listFilter = '';
  }

  ValidateFilter() {
    if (this.selectedItem != null && this.itemLable != '') {
      this.itemLable = this.selectedItem[this.filterOn];
    }
    else {
      let found: boolean = false;
      this.listItems.forEach(element => {
        if (element[this.filterOn] === this.itemLable) {
          found = true;
        }
      });

      if (!found) {
        this.itemLable = '';
        this.listFilter = '';
        this.selectedItem = null;
      }
    }
  }
}
