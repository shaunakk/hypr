import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import {StockPage} from '../stock/stock'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchTerm: string = '';
  items: any;
  stockTapped(event, item) {
    console.log(JSON.stringify(item));
    this.navCtrl.push(StockPage, {
      stock: item
    });
  }
  constructor(public navCtrl: NavController, public dataService: Data) {

  }

  ionViewDidLoad() {
    this.setFilteredItems();

  }

  setFilteredItems() {

    this.items = this.dataService.filterItems(this.searchTerm);

  }
}
