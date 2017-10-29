import { Component } from '@angular/core';
import { NavController, Alert, Platform } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import {StockPage} from '../stock/stock'
declare var navigator: any;
declare var Connection: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  checkNetwork() {
    this.platform.ready().then(() => {
      var networkState = navigator.connection.type;
      var states = {};
      states[Connection.UNKNOWN] = 'Unknown connection';
      states[Connection.ETHERNET] = 'Ethernet connection';
      states[Connection.WIFI] = 'WiFi connection';
      states[Connection.CELL_2G] = 'Cell 2G connection';
      states[Connection.CELL_3G] = 'Cell 3G connection';
      states[Connection.CELL_4G] = 'Cell 4G connection';
      states[Connection.CELL] = 'Cell generic connection';
      states[Connection.NONE] = 'No network connection';
    });
  }
  searchTerm: string = '';
  items: any;
  stockTapped(event, item) {
    console.log(JSON.stringify(item));
    this.navCtrl.push(StockPage, {
      stock: item
    });
  }
  constructor(public navCtrl: NavController, public dataService: Data, private platform: Platform) {

  }

  ionViewDidLoad() {
    this.setFilteredItems();

  }

  setFilteredItems() {

    this.items = this.dataService.filterItems(this.searchTerm);

  }
}
