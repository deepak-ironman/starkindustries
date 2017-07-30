webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_cities_cities_component__ = __webpack_require__("../../../../../src/app/cities/cities.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    // {path: '', pathMatch: 'full', redirectTo: 'cities' },
    // {path: '', children: [] },
    // {path: '', component: NavComponent}, //dont do. creates duplicate bar
    { path: 'cities', component: __WEBPACK_IMPORTED_MODULE_2_app_cities_cities_component__["a" /* CitiesComponent */] },
    { path: '', redirectTo: 'NavComponent', pathMatch: 'full' },
    { path: '**', redirectTo: 'NavComponent', pathMatch: 'full' }
    /*
     ([
      { path: '', redirectTo: 'cities', pathMatch: 'full' },
      { path: 'cities', component: CitiesComponent }
    ]),*/
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<!-- <div style=\"text-align:center\">\n</div>\n-->\n<app-nav></app-nav>\n  <!--\n  <h1>\n    Welcome to {{title}}!!\n  </h1>\n  -->\n<!--\n  <nav>\n    <ul>\n      <li><a href=\"\" [routerLink]=\"['/cities']\">Cities</a></li>\n      <li></li>\n    </ul>\n  </nav>\n-->\n<router-outlet></router-outlet>\n  <!--\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\" />\n  -->\n\n<!--\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"http://angularjs.blogspot.ca/\">Angular blog</a></h2>\n  </li>\n</ul>\n -->\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app is taken over by me :-)';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cities_cities_component__ = __webpack_require__("../../../../../src/app/cities/cities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__customer_customer_module__ = __webpack_require__("../../../../../src/app/customer/customer.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__cities_cities_component__["a" /* CitiesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__["a" /* NavComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__customer_customer_module__["a" /* CustomerModule */]
            /* RouterModule.forRoot([
              { path: '', redirectTo: 'cities', pathMatch: 'full' },
              { path: 'cities', component: CitiesComponent }
            ])*/
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cities/cities.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Parent component</h1>\n<!-- Input message box for parent to send to child -->\n<fieldset>\n  <label>\n      Message for child:\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"parentText\"\n        placeholder=\"Enter your text here\">\n    </label>\n</fieldset>\n\n<!-- Shows the alert message -->\n<div *ngIf=\"alertVisible\">\n  <div class=\"alert alert-info alert-dismissible\">\n    <h1>{{receivedMsg}}</h1>\n    <button class='btn btn-primary' (click)=\"reset()\">Reset</button>\n  </div>\n</div>\n\n<!-- shows the child component -->\n<app-name-detail [ishidden]=\"alertVisible\"\n  [childText]=\"parentText\" (msgForParent)=\"clicked($event)\">\n</app-name-detail>\n"

/***/ }),

/***/ "../../../../../src/app/cities/cities.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cities/cities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CitiesComponent = (function () {
    function CitiesComponent() {
        this.alertVisible = false;
    }
    CitiesComponent.prototype.clicked = function (msg) {
        console.log('[CitiesComponent]: Message is: ' + msg);
        this.alertVisible = true;
        this.receivedMsg = msg;
    };
    CitiesComponent.prototype.reset = function () {
        this.alertVisible = false;
        this.parentText = '';
    };
    return CitiesComponent;
}());
CitiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-cities',
        template: __webpack_require__("../../../../../src/app/cities/cities.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cities/cities.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CitiesComponent);

//# sourceMappingURL=cities.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer-shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_customer_CustomerModel__ = __webpack_require__("../../../../../src/app/customer/CustomerModel.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerSharedService = (function () {
    function CustomerSharedService() {
        this.defaultCustomer = new __WEBPACK_IMPORTED_MODULE_1_app_customer_CustomerModel__["a" /* Customer */](null, '', '', '');
    }
    CustomerSharedService.prototype.getDefaultCustomer = function () {
        return this.defaultCustomer;
    };
    return CustomerSharedService;
}());
CustomerSharedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CustomerSharedService);

//# sourceMappingURL=customer-shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/customer/CustomerModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = (function () {
    /*   id: number;
      name: string;
      surname: string;
      country: string; */
    function Customer(id, name, surname, country) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.country = country;
    }
    return Customer;
}());

//# sourceMappingURL=CustomerModel.js.map

/***/ }),

/***/ "../../../../../src/app/customer/customer-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_customer_name_list_name_list_component__ = __webpack_require__("../../../../../src/app/customer/name-list/name-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'customer', component: __WEBPACK_IMPORTED_MODULE_2__customer_component__["a" /* CustomerComponent */] },
    { path: 'customer/displayAll', component: __WEBPACK_IMPORTED_MODULE_3_app_customer_name_list_name_list_component__["a" /* NameListComponent */] }
];
var CustomerRoutingModule = (function () {
    function CustomerRoutingModule() {
    }
    return CustomerRoutingModule;
}());
CustomerRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], CustomerRoutingModule);

//# sourceMappingURL=customer-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div [hidden]=\"submitted\">\n     <h1 *ngIf=\"!isUpate; else updateHeadingTemplate\">\n      Welcome to Capture Form\n    </h1>\n    <ng-template #updateHeadingTemplate>\n      <h1>Welcome to Update Form </h1>\n    </ng-template>\n\n    <form (ngSubmit)=\"onNameFormSubmit(customer)\" #customerForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\"\n          required [(ngModel)]=\"customer.name\" name=\"name\" #name=\"ngModel\">\n        <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n          Name is required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"surname\">Surname</label>\n        <input type=\"text\" class=\"form-control\" id=\"surname\"\n          required [(ngModel)]=\"customer.surname\" name=\"surname\" #surname=\"ngModel\">\n        <div [hidden]=\"surname.valid || surname.pristine\" class=\"alert alert-danger\">\n          Surname is required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"country\">Country</label>\n        <select [(ngModel)]=\"customer.country\" name=\"country\" class=\"form-control\" required>\n          <option *ngFor = \"let country of countries\">{{country}}</option>\n        </select>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!customerForm.form.valid\">Submit</button>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"newCustomer(); customerForm.reset()\">Reset</button>\n    </form>\n  </div>\n\n  <div [hidden]=\"!submitted\">\n    <h2>You submitted the following:</h2>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Name</div>\n      <div class=\"col-xs-9  pull-left\">{{ customer.name }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Surname</div>\n      <div class=\"col-xs-9 pull-left\">{{ customer.surname }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Country</div>\n      <div class=\"col-xs-9 pull-left\">{{ customer.country }}</div>\n    </div>\n    <br>\n    <button class=\"btn btn-primary\" (click)=\"backToCapture()\">BackToCapture</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_customer_shared_service__ = __webpack_require__("../../../../../src/app/customer-shared.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerComponent = (function () {
    function CustomerComponent(_custService, _custSharedService) {
        this._custService = _custService;
        this._custSharedService = _custSharedService;
        this.countries = ['South Africa', 'Germany', 'United States of America', 'Mexico'];
        this.submitted = false;
        this.isUpate = false;
        // Create a default customer
        // this.customer = new CustomerI(null, '', '', '');
        // moved to ngOnInit() -->this.customer = new Customer(this.myid, '', '', '');
        console.log('[CustomerComponent constr]:  injected _custSharedService id: '
            + _custSharedService.customer);
    }
    CustomerComponent.prototype.onNameFormSubmit = function (customer) {
        this.submitted = true;
        console.log('onSubmit---> name is: ' + this.logCust(this.customer));
        if (this.isUpate) {
            // For an update
            this._custService.updateName(this.customer)
                .subscribe(function (result) { return console.log('[UpdateName Result is]: ' + result); });
        }
        else {
            // For a new customer call create
            // this.customer.id = this.myid; // TODO take this line out
            this._custService.createName(this.customer)
                .subscribe(function (result) { return console.log('[CreateName Result is]: ' + result); });
        }
    };
    CustomerComponent.prototype.logCust = function (customer) {
        return '[name: ' + customer.name +
            ' [surname: ' + customer.surname +
            ' [country: ' + customer.country +
            ' [id: ' + customer.id + ' ]';
    };
    CustomerComponent.prototype.newCustomer = function () {
        console.log('newCustomer----> name is: ' + name);
        if (this.isUpate) {
            this.isUpate = false;
            this.customer = this._custSharedService.getDefaultCustomer();
        }
        // ***NOTES**** how to check if string is null or undefined
        /* if(typeof RetailPrice!='undefined' && RetailPrice){
       return this.RetailPrice; */
    };
    CustomerComponent.prototype.ngOnInit = function () {
        this.customer = this._custSharedService.getDefaultCustomer();
        if (typeof this._custSharedService.customer !== 'undefined'
            && this._custSharedService.customer) {
            this.getNameById(this._custSharedService.customer);
        }
    };
    CustomerComponent.prototype.backToCapture = function () {
        this.submitted = false; // submitted=false
        // this.myid++;
    };
    CustomerComponent.prototype.getNameById = function (id) {
        var _this = this;
        this._custService.getNameById(id).subscribe(function (custToUpdate) {
            _this.isUpate = true;
            _this.customer = custToUpdate;
        }, function (error) {
            _this.errorMessage = error;
            console.log('Error in DeleteNameById: ' + _this.errorMessage);
        });
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-customer',
        template: __webpack_require__("../../../../../src/app/customer/customer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/customer.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_customer_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_customer_customer_service__["a" /* CustomerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_customer_shared_service__["a" /* CustomerSharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_customer_shared_service__["a" /* CustomerSharedService */]) === "function" && _b || Object])
], CustomerComponent);

var _a, _b;
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/customer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_routing_module__ = __webpack_require__("../../../../../src/app/customer/customer-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__name_detail_name_detail_component__ = __webpack_require__("../../../../../src/app/customer/name-detail/name-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__name_list_name_list_component__ = __webpack_require__("../../../../../src/app/customer/name-list/name-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__customer_shared_service__ = __webpack_require__("../../../../../src/app/customer-shared.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CustomerModule = (function () {
    function CustomerModule() {
    }
    return CustomerModule;
}());
CustomerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__customer_routing_module__["a" /* CustomerRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__customer_component__["a" /* CustomerComponent */], __WEBPACK_IMPORTED_MODULE_6__name_detail_name_detail_component__["a" /* NameDetailComponent */], __WEBPACK_IMPORTED_MODULE_7__name_list_name_list_component__["a" /* NameListComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__customer_component__["a" /* CustomerComponent */], __WEBPACK_IMPORTED_MODULE_6__name_detail_name_detail_component__["a" /* NameDetailComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_9__customer_shared_service__["a" /* CustomerSharedService */]]
    })
], CustomerModule);

//# sourceMappingURL=customer.module.js.map

/***/ }),

/***/ "../../../../../src/app/customer/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var API_URL = __WEBPACK_IMPORTED_MODULE_7_environments_environment_prod__["a" /* environment */].apiUrl; // access environment url API
var CustomerService = (function () {
    function CustomerService(_http) {
        this._http = _http;
    }
    CustomerService.prototype.getAllNames = function () {
        console.log('in getAllNames method ' + API_URL + '/customers');
        return this._http.get(API_URL + '/customers')
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    CustomerService.prototype.getName = function (id) {
        return this.getAllNames()
            .map(function (customers) { return customers.find(function (p) { return p.id === id; }); });
    };
    CustomerService.prototype.getNameById = function (id) {
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var cpParams = new URLSearchParams();
        cpParams.set('id', id);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: cpHeaders, params: cpParams });
        return this._http.get(API_URL + '/customers/' + id, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('Name By Id: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    CustomerService.prototype.handleError = function (error) {
        // console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    /* orig rem by dee private handleError(error: Response) {
     console.error(error);
     return Observable.throw(error.json().error || 'Server error');
   } */
    // Create name
    CustomerService.prototype.createName = function (customer) {
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: cpHeaders });
        return this._http.post(API_URL + '/customers', customer, options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    // Update name //in progress
    CustomerService.prototype.updateName = function (customer) {
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: cpHeaders });
        console.log('**** in updateName ****');
        console.log('[API_URL + Customers] ' + API_URL + '/customers');
        console.log(' ');
        // let id = '{' + customer.id + '}';
        return this._http.put(API_URL + '/customers/' + customer.id, customer, options)
            .map(function (success) { return success.status; }, function (success) { return console.log('[success]: ' + success.status); })
            .catch(this.handleError);
    };
    // Delete name
    CustomerService.prototype.deleteNameById = function (nameId) {
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var cpParams = new URLSearchParams();
        cpParams.set('id', nameId);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: cpHeaders, params: cpParams });
        return this._http.delete(API_URL + '/customers/' + nameId, options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    return CustomerService;
}());
CustomerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], CustomerService);

var _a;
//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ "../../../../../src/app/customer/name-detail/name-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{pageTitle}}</h2>\n\n<div [hidden]=\"ishidden\">\n  <a class='btn btn-primary' (click)=\"buttonClicked()\">Submit</a>\n  {{childText}}\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customer/name-detail/name-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/name-detail/name-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NameDetailComponent = (function () {
    function NameDetailComponent() {
        this.pageTitle = '*** Child Component ***';
        this.ishidden = false;
        this.msgForParent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    NameDetailComponent.prototype.buttonClicked = function () {
        console.log('[NameDetailComponent]: buttonclicked ');
        console.log('[NameDetailComponent]: childText is now: ' + this.childText);
        var msg = 'Alert message from child component.Button clicked.'
            + 'Message received from parent: [';
        this.msgForParent.emit(msg + this.childText + ']');
        console.log('[NameDetailComponent]: *****buttonclicked ENDS*****');
        this.ishidden = true;
    };
    return NameDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], NameDetailComponent.prototype, "ishidden", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], NameDetailComponent.prototype, "childText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], NameDetailComponent.prototype, "msgForParent", void 0);
NameDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-name-detail',
        template: __webpack_require__("../../../../../src/app/customer/name-detail/name-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/name-detail/name-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NameDetailComponent);

//# sourceMappingURL=name-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/name-list/name-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='panel panel-primary'>\n    <div>\n      <div class='has-error' *ngIf='errorMessage'>{{errorMessage}}</div>\n      <div>\n        <table class=\"table table-striped, table-hover\" *ngIf='customers && customers.length'>\n          <thead class=\"thead-default\">\n            <tr>\n              <th class='col-md-1'>Name</th>\n              <th class='col-md-1'>Surname</th>\n              <th class='col-md-1'>Country</th>\n              <th class='col-md-1'>Id</th>\n              <th class='col-md-1'>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor='let customer of customers'>\n              <td>{{customer.name | titlecase }}</td>\n              <td>{{ customer.surname | titlecase }}</td>\n              <td>{{ customer.country }}</td>\n              <td>{{ customer.id }}</td>\n\n              <td>\n                <button class='btn btn-success' (click)=\"loadNameToEdit(customer.id)\">Edit</button>\n                <button class='btn btn-primary' (click)=\"deleteNameById(customer.id)\">Delete</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n</div>\n\n<div class='panel-footer'>\n  <a class='btn btn-default' (click)='onBack()' style='width:80px'>\n    <i class='glyphicon glyphicon-chevron-left'></i> Back\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customer/name-list/name-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/name-list/name-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_customer_shared_service__ = __webpack_require__("../../../../../src/app/customer-shared.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NameListComponent = (function () {
    function NameListComponent(_custService, _router, _custSharedService) {
        this._custService = _custService;
        this._router = _router;
        this._custSharedService = _custSharedService;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
    }
    NameListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    NameListComponent.prototype.ngOnInit = function () {
        this.getAllCustomers();
    };
    NameListComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this._custService.getAllNames()
            .subscribe(function (customers) { return _this.customers = customers; }, function (error) { return _this.errorMessage = error; });
    };
    NameListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Name List: ' + message;
    };
    NameListComponent.prototype.deleteNameById = function (nameId) {
        var _this = this;
        console.log('deleteNameById: id is ' + nameId);
        this._custService.deleteNameById(nameId)
            .subscribe(function (successCode) {
            _this.statusCode = successCode;
            _this.getAllCustomers();
        }, function (error) { console.log('Error in DeleteNameById: ' + _this.errorMessage); });
        console.log('deleteNameById: successCode is ' + this.statusCode);
        //  problem line is: , error => {this.errorMessage = <any> error;
        /* , error => {this.errorMessage = <any> error;
                                  console.log('Error in DeleteNameById: ' + this.errorMessage)} ); */
        // this._router.navigate(['/customer/displayAll']);
        // this._router.navigate(['/customer']);
        // this._router.navigate(['/customer/displayAll']);
        /* this._custService.deleteNameById(nameId)
          .subscribe(successCode => {
                  // this.statusCode = successCode;
                  // this.getAllArticles();
                  // this.backToCreateArticle();
              } ,
               errorCode => this.statusCode = errorCode); */
    };
    NameListComponent.prototype.loadNameToEdit = function (id, cust) {
        console.log('loadNameToEdit: id is ' + id);
        this.setCustomerShared(id);
        this._router.navigate(['/customer']);
    };
    NameListComponent.prototype.setCustomerShared = function (id) {
        this._custSharedService.customer = id;
    };
    NameListComponent.prototype.onBack = function () {
        this._router.navigate(['/customer']);
    };
    return NameListComponent;
}());
NameListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-name-list',
        template: __webpack_require__("../../../../../src/app/customer/name-list/name-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/name-list/name-list.component.scss")]
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_customer_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_customer_customer_service__["a" /* CustomerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_app_customer_shared_service__["a" /* CustomerSharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_customer_shared_service__["a" /* CustomerSharedService */]) === "function" && _c || Object])
], NameListComponent);

var _a, _b, _c;
//# sourceMappingURL=name-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">IronMan</a>\n  <ul class=\"nav navbar-nav mr-auto\">\n    <li class=\"nav-item\">\n      <!-- <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a> -->\n      <!-- <a class=\"navbar-brand\" href=\"#\" [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a> -->\n      <!-- <li class=\"nav-item active\"> weird effect,this makes home look odd-->\n      <a class=\"navbar-brand\" href=\"#\" [routerLink]=\"['/']\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <!-- <a class=\"nav-link\" href=\"#\">About</a> -->\n      <a class=\"navbar-brand\" href=\"#\" [routerLink]=\"['/customer']\">Capture</a>\n    </li>\n    <li class=\"nav-item\">\n      <!-- <a class=\"nav-link\" href=\"#\">About</a> -->\n      <a class=\"navbar-brand\" href=\"#\" [routerLink]=\"['/customer/displayAll']\">Display</a>\n    </li>\n    <li class=\"nav-item\">\n      <!-- <a class=\"nav-link\" href=\"#\" [routerLink]=\"['cities']\">Cities</a> -->\n      <a class=\"navbar-brand\" href=\"#\" [routerLink]=\"['/cities']\">Cities</a>\n    </li>\n    </ul>\n  <ul class=\"nav navbar-nav\">\n\n   <!--\n    <p>\n   nav works!\n    {{nav}}\n    </p>\n\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"https://medium.com/@beeman\"><i class=\"fa fa-medium\" aria-hidden=\"true\"></i></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"https://twitter.com/@beeman_nl\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"https://github.com/beeman\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a>\n    </li>\n    -->\n  </ul>\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
        this.nav = 'Nav works via viariable!';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/nav.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    // URL of production API
    /* apiUrl: 'http://localhost:3000' */
    apiUrl: 'http://localhost:8080'
};
//# sourceMappingURL=environment.prod.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    // URL of development API
    /* apiUrl: 'http://localhost:3000' */
    apiUrl: 'http://localhost:8080'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map