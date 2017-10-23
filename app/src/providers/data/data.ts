import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  items: any;

  constructor(public http: Http) {

    this.items = this.http.get('http://hypedesk.herokuapp.com/stock')
  }

  filterItems(searchTerm) {

    return JSON.parse(this.items).filter((item) => {
      return item.c.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

}
