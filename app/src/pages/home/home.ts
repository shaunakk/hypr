import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchTerm: string = '';
  items: any;

  constructor(public navCtrl: NavController, public dataService: Data) {

  }

  ionViewDidLoad() {

    this.setFilteredItems();

  }

  setFilteredItems() {

    this.items = this.dataService.filterItems(this.searchTerm);

  }
}
