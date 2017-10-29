import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TickerDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TickerDataProvider {
  constructor(public http: Http) {
    this.http = http

  }
  getStock(stockName) {
    return this.http.get('http://hypedesk.herokuapp.com/getstock?stock=' + stockName).map((res) => { return res.json() })


  }
}
