import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  items: any;

  constructor(public http: Http) {

    this.http.get('http://hypedesk.herokuapp.com/stock').subscribe(res => {
      console.log(JSON.stringify(res.json()));
      this.items = res.json()
    }, (err) => {
      console.error(JSON.stringify(err));
    });
  };
  filterItems(searchTerm) {

    if (searchTerm.length > 2) {
      let filterCount = 0;

      return this.items.filter((item, index, array) => {
        if (filterCount < 5 && ((item.Name.toLowerCase() + item.Symbol.toLowerCase()).indexOf(searchTerm.toLowerCase()) > -1)) {
          filterCount++
          return true;
        }
      });
    }
  }
}
