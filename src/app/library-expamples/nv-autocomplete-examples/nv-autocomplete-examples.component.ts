import { Component, OnInit } from '@angular/core';
import { Item } from './nv-autocomplete-example-model';

@Component({
  selector: 'nv-autocomplete-examples',
  templateUrl: './nv-autocomplete-examples.component.html',
  styleUrls: ['./nv-autocomplete-examples.component.scss']
})
export class NvAutocompleteExamplesComponent implements OnInit {

  items: Item[] = new Array();

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
}

