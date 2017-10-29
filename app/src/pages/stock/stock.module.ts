import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockPage } from './stock';
import {TickerDataProvider} from '../../providers/ticker-data/ticker-data'
@NgModule({
  declarations: [
    StockPage,
  ],
  imports: [
    IonicPageModule.forChild(StockPage),
  ],
  entryComponents: [
    StockPage
  ],
  providers: [
    TickerDataProvider
  ]
})
export class StockPageModule { }
