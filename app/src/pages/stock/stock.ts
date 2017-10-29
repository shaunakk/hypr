import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { Chart } from 'chart.js';
import { TickerDataProvider } from '../../providers/ticker-data/ticker-data';

/**
 * Generated class for the StockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-stock',
  templateUrl: 'stock.html',
})

export class StockPage {

  @ViewChild('lineCanvas') lineCanvas;

  priceLoad = false;
  lineChart: any;
  stock = {};

  constructor(public navCtrl: NavController, public dataService: TickerDataProvider, public platform: Platform, public navParams: NavParams) {
    this.stock = navParams.get('stock');

  }

  ionViewDidLoad() {
    this.makeChart()


  }
  makeChart() {
    this.dataService.getStock((this.stock as any).Symbol).subscribe((tickerData) => {

      console.log(JSON.stringify(tickerData))
      this.lineChart = new Chart(this.lineCanvas.nativeElement, {
        scaleFontColor: '#488AFF',
        options: {
          legend: {
            display: false
          },
          scaleFontColor: '#488AFF',
          scales: {
            xAxes: [{
              ticks: {
                display: false,
                fontColor: "#488AFF"
              }, gridLines: {
                display: false
              }
            }],
            yAxes: [{
              ticks: {
                display: false,
                fontColor: "#488AFF"
              }, gridLines: {
                display: false
              }
            }]
          }
        },
        type: 'line',
        data: {
          labels: tickerData['y'],
          datasets: [
            {
              pointRadius: 0,
              pointHitRadius: 20,
              label: "Price",
              fill: false,
              backgroundColor: "#488AFF",
              borderWidth: 2,
              pointHoverBackgroundColor: "#488AFF",
              pointBorderWidth: 0,
              pointHoverRadius: 3,
              data: tickerData['x'],
              borderColor: "#488AFF"
            }
          ]
        }

      });
    });

  }

}
