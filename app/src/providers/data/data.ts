import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  items: any;

  constructor(public http: Http) {

    this.http.get('http://hypedesk.herokuapp.com/stock').subscribe(res => {
      this.items = res.json()
    }, (err) => {
      console.error(JSON.stringify(err));
    });
  };
  filterItems(searchTerm) {

    if (searchTerm.length > 0) {
      let filterCount = 0;

      return this.items.filter((item, index, array) => {
        if (filterCount < 8 && ((item.Symbol.toLowerCase()).slice(0, searchTerm.toLowerCase().length) == searchTerm.toLowerCase() || (item.Name.toLowerCase()).slice(0, searchTerm.toLowerCase().length) == searchTerm.toLowerCase())) {
          console.log("true")
          filterCount++
          return true;
        }
      });
    }
  }
}
