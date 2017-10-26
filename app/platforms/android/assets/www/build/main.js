webpackJsonp([0],{

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stock_stock__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.searchTerm = '';
    }
    HomePage.prototype.stockTapped = function (event, item) {
        console.log(JSON.stringify(item));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__stock_stock__["a" /* StockPage */], {
            stock: item
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.setFilteredItems();
    };
    HomePage.prototype.setFilteredItems = function () {
        this.items = this.dataService.filterItems(this.searchTerm);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/shaunak/hypr/app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n  <ion-searchbar placeholder="Search Stock" [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar>\n\n</ion-header>\n\n<ion-content scroll="false">\n  <ion-card type="button" *ngFor="let item of items" (click)="stockTapped($event, item)">\n    <ion-card-header>\n      {{item.Symbol}} {{item.Name}}\n    </ion-card-header>\n    <ion-card-content>\n      Market Cap: {{item.MarketCap}} <br> Industry: {{item.industry}}\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/shaunak/hypr/app/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* Data */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Data = (function () {
    function Data(http) {
        var _this = this;
        this.http = http;
        this.http.get('http://hypedesk.herokuapp.com/stock').subscribe(function (res) {
            console.log(JSON.stringify(res.json()));
            _this.items = res.json();
        }, function (err) {
            console.error(JSON.stringify(err));
        });
    }
    ;
    Data.prototype.filterItems = function (searchTerm) {
        if (searchTerm.length > 0) {
            var filterCount_1 = 0;
            return this.items.filter(function (item, index, array) {
                if (filterCount_1 < 10 && ((item.Symbol.toLowerCase()).slice(0, searchTerm.toLowerCase().length) == searchTerm.toLowerCase() || (item.Name.toLowerCase()).slice(0, searchTerm.toLowerCase().length) == searchTerm.toLowerCase())) {
                    filterCount_1++;
                    return true;
                }
            });
        }
    };
    return Data;
}());
Data = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], Data);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StockPage = (function () {
    function StockPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stock = {};
        this.stock = navParams.get('stock');
    }
    StockPage.prototype.ionViewDidLoad = function () {
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    return StockPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('lineCanvas'),
    __metadata("design:type", Object)
], StockPage.prototype, "lineCanvas", void 0);
StockPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-stock',template:/*ion-inline-start:"/home/shaunak/hypr/app/src/pages/stock/stock.html"*/'<!--\n  Generated template for the StockPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{stock.Name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      Line Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #lineCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/shaunak/hypr/app/src/pages/stock/stock.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], StockPage);

//# sourceMappingURL=stock.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/home/shaunak/hypr/app/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/shaunak/hypr/app/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(342);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_stock_stock__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_data_data__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_stock_stock__["a" /* StockPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_stock_stock__["a" /* StockPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_data_data__["a" /* Data */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            setTimeout(function () {
                _this.splashScreen.hide();
                console.log("loaded");
            }, 2000);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/shaunak/hypr/app/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/shaunak/hypr/app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 207,
	"./af.js": 207,
	"./ar": 208,
	"./ar-dz": 209,
	"./ar-dz.js": 209,
	"./ar-kw": 210,
	"./ar-kw.js": 210,
	"./ar-ly": 211,
	"./ar-ly.js": 211,
	"./ar-ma": 212,
	"./ar-ma.js": 212,
	"./ar-sa": 213,
	"./ar-sa.js": 213,
	"./ar-tn": 214,
	"./ar-tn.js": 214,
	"./ar.js": 208,
	"./az": 215,
	"./az.js": 215,
	"./be": 216,
	"./be.js": 216,
	"./bg": 217,
	"./bg.js": 217,
	"./bn": 218,
	"./bn.js": 218,
	"./bo": 219,
	"./bo.js": 219,
	"./br": 220,
	"./br.js": 220,
	"./bs": 221,
	"./bs.js": 221,
	"./ca": 222,
	"./ca.js": 222,
	"./cs": 223,
	"./cs.js": 223,
	"./cv": 224,
	"./cv.js": 224,
	"./cy": 225,
	"./cy.js": 225,
	"./da": 226,
	"./da.js": 226,
	"./de": 227,
	"./de-at": 228,
	"./de-at.js": 228,
	"./de-ch": 229,
	"./de-ch.js": 229,
	"./de.js": 227,
	"./dv": 230,
	"./dv.js": 230,
	"./el": 231,
	"./el.js": 231,
	"./en-au": 232,
	"./en-au.js": 232,
	"./en-ca": 233,
	"./en-ca.js": 233,
	"./en-gb": 234,
	"./en-gb.js": 234,
	"./en-ie": 235,
	"./en-ie.js": 235,
	"./en-nz": 236,
	"./en-nz.js": 236,
	"./eo": 237,
	"./eo.js": 237,
	"./es": 238,
	"./es-do": 239,
	"./es-do.js": 239,
	"./es.js": 238,
	"./et": 240,
	"./et.js": 240,
	"./eu": 241,
	"./eu.js": 241,
	"./fa": 242,
	"./fa.js": 242,
	"./fi": 243,
	"./fi.js": 243,
	"./fo": 244,
	"./fo.js": 244,
	"./fr": 245,
	"./fr-ca": 246,
	"./fr-ca.js": 246,
	"./fr-ch": 247,
	"./fr-ch.js": 247,
	"./fr.js": 245,
	"./fy": 248,
	"./fy.js": 248,
	"./gd": 249,
	"./gd.js": 249,
	"./gl": 250,
	"./gl.js": 250,
	"./gom-latn": 251,
	"./gom-latn.js": 251,
	"./he": 252,
	"./he.js": 252,
	"./hi": 253,
	"./hi.js": 253,
	"./hr": 254,
	"./hr.js": 254,
	"./hu": 255,
	"./hu.js": 255,
	"./hy-am": 256,
	"./hy-am.js": 256,
	"./id": 257,
	"./id.js": 257,
	"./is": 258,
	"./is.js": 258,
	"./it": 259,
	"./it.js": 259,
	"./ja": 260,
	"./ja.js": 260,
	"./jv": 261,
	"./jv.js": 261,
	"./ka": 262,
	"./ka.js": 262,
	"./kk": 263,
	"./kk.js": 263,
	"./km": 264,
	"./km.js": 264,
	"./kn": 265,
	"./kn.js": 265,
	"./ko": 266,
	"./ko.js": 266,
	"./ky": 267,
	"./ky.js": 267,
	"./lb": 268,
	"./lb.js": 268,
	"./lo": 269,
	"./lo.js": 269,
	"./lt": 270,
	"./lt.js": 270,
	"./lv": 271,
	"./lv.js": 271,
	"./me": 272,
	"./me.js": 272,
	"./mi": 273,
	"./mi.js": 273,
	"./mk": 274,
	"./mk.js": 274,
	"./ml": 275,
	"./ml.js": 275,
	"./mr": 276,
	"./mr.js": 276,
	"./ms": 277,
	"./ms-my": 278,
	"./ms-my.js": 278,
	"./ms.js": 277,
	"./my": 279,
	"./my.js": 279,
	"./nb": 280,
	"./nb.js": 280,
	"./ne": 281,
	"./ne.js": 281,
	"./nl": 282,
	"./nl-be": 283,
	"./nl-be.js": 283,
	"./nl.js": 282,
	"./nn": 284,
	"./nn.js": 284,
	"./pa-in": 285,
	"./pa-in.js": 285,
	"./pl": 286,
	"./pl.js": 286,
	"./pt": 287,
	"./pt-br": 288,
	"./pt-br.js": 288,
	"./pt.js": 287,
	"./ro": 289,
	"./ro.js": 289,
	"./ru": 290,
	"./ru.js": 290,
	"./sd": 291,
	"./sd.js": 291,
	"./se": 292,
	"./se.js": 292,
	"./si": 293,
	"./si.js": 293,
	"./sk": 294,
	"./sk.js": 294,
	"./sl": 295,
	"./sl.js": 295,
	"./sq": 296,
	"./sq.js": 296,
	"./sr": 297,
	"./sr-cyrl": 298,
	"./sr-cyrl.js": 298,
	"./sr.js": 297,
	"./ss": 299,
	"./ss.js": 299,
	"./sv": 300,
	"./sv.js": 300,
	"./sw": 301,
	"./sw.js": 301,
	"./ta": 302,
	"./ta.js": 302,
	"./te": 303,
	"./te.js": 303,
	"./tet": 304,
	"./tet.js": 304,
	"./th": 305,
	"./th.js": 305,
	"./tl-ph": 306,
	"./tl-ph.js": 306,
	"./tlh": 307,
	"./tlh.js": 307,
	"./tr": 308,
	"./tr.js": 308,
	"./tzl": 309,
	"./tzl.js": 309,
	"./tzm": 310,
	"./tzm-latn": 311,
	"./tzm-latn.js": 311,
	"./tzm.js": 310,
	"./uk": 312,
	"./uk.js": 312,
	"./ur": 313,
	"./ur.js": 313,
	"./uz": 314,
	"./uz-latn": 315,
	"./uz-latn.js": 315,
	"./uz.js": 314,
	"./vi": 316,
	"./vi.js": 316,
	"./x-pseudo": 317,
	"./x-pseudo.js": 317,
	"./yo": 318,
	"./yo.js": 318,
	"./zh-cn": 319,
	"./zh-cn.js": 319,
	"./zh-hk": 320,
	"./zh-hk.js": 320,
	"./zh-tw": 321,
	"./zh-tw.js": 321
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 423;

/***/ })

},[323]);
//# sourceMappingURL=main.js.map