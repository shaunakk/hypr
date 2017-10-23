import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  items: any;

  constructor(public http: Http) {

    this.http.get('http://192.168.1.210:3000/stock').subscribe(res => {
      console.log(res.json());
    }, (err) => {
      console.error(JSON.stringify(err));
    });
  }

  filterItems(searchTerm) {
    //
    // return JSON.parse(this.items).filter((item) => {
    //   return item.c.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    // });

  }

}
