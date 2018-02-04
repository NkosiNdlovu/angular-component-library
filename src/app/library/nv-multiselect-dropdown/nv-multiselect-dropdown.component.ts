import { Component, OnInit } from '@angular/core';
import { Item } from '../../library-expamples/nv-autocomplete-examples/nv-autocomplete-example-model';

@Component({
  selector: 'nv-multiselect-dropdown',
  templateUrl: './nv-multiselect-dropdown.component.html',
  styleUrls: ['./nv-multiselect-dropdown.component.scss']
})
export class NvMultiselectDropdownComponent implements OnInit {
  items: Item[] = new Array();

  selectAllItemText: string = '';

  searchItem:string = '';
  selectedItem: Item[] ;

  constructor() {
    this.selectedItem = null;
    this.items.push({
      id: 1, active: false, sortOrder: '', title: 'Apple'
    });

    this.items.push({
      id: 2, active: false, sortOrder: '', title: 'Orange'
    });

    this.items.push({
      id: 3, active: false, sortOrder: '', title: 'Banana'
    });

    this.items.push({
      id: 3, active: false, sortOrder: '', title: 'Mango'
    });
  }

  ngOnInit() {

  }

  updateselectAllItemsText() {
    let count = 0;
    this.items.forEach(element => {
      if (element["selected"]) {
        count++;
      }
    });

    if(count> 0) {
      this.selectAllItemText = `${count} Fruit(s) Selected`;
    } else {
      this.selectAllItemText = "All Fruits";
    }
  }

  selectAllItems(value) {
    this.items.forEach(element => {
      element['selected'] = value;
    });

    this.updateselectAllItemsText()
  }
}
