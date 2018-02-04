import { Component, OnInit } from '@angular/core';
import { Item } from './nv-layout-example-model';

@Component({
  selector: 'nv-layout-examples',
  templateUrl: './nv-layout-examples.component.html',
  styleUrls: ['./nv-layout-examples.component.scss']
})
export class NvLayoutExamplesComponent implements OnInit {

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

