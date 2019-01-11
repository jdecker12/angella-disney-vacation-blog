(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/about/about.component.html":
/*!****************************************!*\
  !*** ./app/about/about.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./app/about/about.component.scss":
/*!****************************************!*\
  !*** ./app/about/about.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./app/about/about.component.ts":
/*!**************************************!*\
  !*** ./app/about/about.component.ts ***!
  \**************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-side-nav></app-side-nav>"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(iconRegistry, sanitizer) {
        this.title = 'Go Disney';
        iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: ["./ClientApp/styles.scss"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/data.service */ "./app/services/data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/material.module */ "./app/shared/material.module.ts");
/* harmony import */ var _cards_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cards/card/card.component */ "./app/cards/card/card.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./app/toolbar/toolbar.component.ts");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./app/side-bar/side-bar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./app/footer/footer.component.ts");
/* harmony import */ var _gd_hero_gd_hero_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gd-hero/gd-hero.component */ "./app/gd-hero/gd-hero.component.ts");
/* harmony import */ var _gdb_menu_gdb_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gdb-menu/gdb-menu.component */ "./app/gdb-menu/gdb-menu.component.ts");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "./app/side-nav/side-nav.component.ts");
/* harmony import */ var _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main-content/main-content.component */ "./app/main-content/main-content.component.ts");
/* harmony import */ var _sidenav_toolbar_sidenav_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sidenav-toolbar/sidenav-toolbar.component */ "./app/sidenav-toolbar/sidenav-toolbar.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./about/about.component */ "./app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contact/contact.component */ "./app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: 'main', component: _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_16__["MainContentComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_19__["ContactComponent"] },
    { path: '**', redirectTo: '' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _cards_card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["ToolbarComponent"],
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_11__["SideBarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _gd_hero_gd_hero_component__WEBPACK_IMPORTED_MODULE_13__["GdHeroComponent"],
                _gdb_menu_gdb_menu_component__WEBPACK_IMPORTED_MODULE_14__["GdbMenuComponent"],
                _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_15__["SideNavComponent"],
                _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_16__["MainContentComponent"],
                _sidenav_toolbar_sidenav_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["SidenavToolbarComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_19__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/cards/card/card.component.html":
/*!********************************************!*\
  !*** ./app/cards/card/card.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let c of cards\">\r\n    <mat-card class=\"go-dis-card\">\r\n        <mat-card-header class=\"card-header\" color=\"Secondary\">\r\n            <mat-icon>{{c.cardIcon}}</mat-icon>\r\n            <mat-card-title>{{c.cardTitle}}</mat-card-title>\r\n            <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\r\n        </mat-card-header>\r\n        <img mat-card-image src=\"/img/{{c.cardImg}}.jpg\" alt=\"Photo of a Shiba Inu\">\r\n        <mat-card-content>\r\n            <p>\r\n             \r\n            </p>\r\n            <a href=\"https://{{c.cardLink}}.com\">{{c.cardLinkName}}</a>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-fab><mat-icon>add</mat-icon></button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./app/cards/card/card.component.scss":
/*!********************************************!*\
  !*** ./app/cards/card/card.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".go-dis-card {\n  margin-top: 2rem;\n  /*img {\r\n        height: 250px;\r\n        width:350px;\r\n    }*/ }\n  .go-dis-card .mat-card-header {\n    color: #007ac1; }\n  .go-dis-card .mat-fab {\n    float: right;\n    top: -59px;\n    right: 3rem;\n    background-color: #007ac1;\n    color: #fff; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jYXJkcy9jYXJkL0M6XFxVc2Vyc1xcamRlY2tcXFNvdXJjZVxcUmVwb3NcXEdvRGlzbmV5QmxvZ1xcR29EaXNuZXlCbG9nXFxDbGllbnRBcHAvYXBwXFxjYXJkc1xcY2FyZFxcY2FyZC5jb21wb25lbnQuc2NzcyIsImFwcC9jYXJkcy9jYXJkL0M6XFxVc2Vyc1xcamRlY2tcXFNvdXJjZVxcUmVwb3NcXEdvRGlzbmV5QmxvZ1xcR29EaXNuZXlCbG9nXFxDbGllbnRBcHAvYXBwXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxpQkFBZ0I7RUFJaEI7OztPQUdHLEVBUU47RUFoQkQ7SUFHUSxlQ0ZRLEVER1g7RUFKTDtJQVVRLGFBQVk7SUFDWixXQUFVO0lBQ1YsWUFBVztJQUNYLDBCQ1pRO0lEYVIsWUFBVyxFQUNkIiwiZmlsZSI6ImFwcC9jYXJkcy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0Jy4uLy4uL192YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4uZ28tZGlzLWNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIC5tYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGNvbG9yOiAkcC1kYXJrO1xyXG4gICAgfVxyXG4gICAgLyppbWcge1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgd2lkdGg6MzUwcHg7XHJcbiAgICB9Ki9cclxuICAgIC5tYXQtZmFiIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgdG9wOiAtNTlweDtcclxuICAgICAgICByaWdodDogM3JlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcC1kYXJrO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcbiIsIu+7vy8vIHZhcmlhYmxlcy5zY3NzXHJcbiRwcmltYXJ5OiAjMDNhOWY0O1xyXG4kcC1saWdodDogIzY3ZGFmZjtcclxuJHAtZGFyazogIzAwN2FjMTtcclxuXHJcbiR5LXllbGxvdzogI2ZmZDc0MDtcclxuXHJcbiRzZWNvbmRhcnk6ICM0Y2FmNTA7XHJcblxyXG4kYnV0dG9uLWZvbnQ6ICNmZmY7XHJcblxyXG4kZ3V0dGVycy1tYWluOiAxcmVtIDdyZW07XHJcblxyXG4kc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcblxyXG4kc2hhZG93LWZvb3RlcjogMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpOyJdfQ== */"

/***/ }),

/***/ "./app/cards/card/card.component.ts":
/*!******************************************!*\
  !*** ./app/cards/card/card.component.ts ***!
  \******************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = /** @class */ (function () {
    function CardComponent(data) {
        this.data = data;
        this.cards = [];
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadCards()
            .subscribe(function (success) {
            if (success) {
                _this.cards = _this.data.cards;
                return true;
            }
        });
    };
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gdb-card',
            template: __webpack_require__(/*! ./card.component.html */ "./app/cards/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./app/cards/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./app/contact/contact.component.html":
/*!********************************************!*\
  !*** ./app/contact/contact.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./app/contact/contact.component.scss":
/*!********************************************!*\
  !*** ./app/contact/contact.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./app/contact/contact.component.ts":
/*!******************************************!*\
  !*** ./app/contact/contact.component.ts ***!
  \******************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./app/footer/footer.component.html":
/*!******************************************!*\
  !*** ./app/footer/footer.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"gdb-footer\">\n</footer>\n"

/***/ }),

/***/ "./app/footer/footer.component.scss":
/*!******************************************!*\
  !*** ./app/footer/footer.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#gdb-footer {\n  height: 250px;\n  width: 100%;\n  background-color: #03a9f4;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.2);\n  z-index: 5;\n  position: relative; }\n  #gdb-footer .gdb-stripe {\n    z-index: 0;\n    background-color: #007ac1;\n    width: 100%;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.2);\n    position: relative;\n    top: -9px;\n    height: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mb290ZXIvQzpcXFVzZXJzXFxqZGVja1xcU291cmNlXFxSZXBvc1xcR29EaXNuZXlCbG9nXFxHb0Rpc25leUJsb2dcXENsaWVudEFwcC9hcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiYXBwL2Zvb3Rlci9DOlxcVXNlcnNcXGpkZWNrXFxTb3VyY2VcXFJlcG9zXFxHb0Rpc25leUJsb2dcXEdvRGlzbmV5QmxvZ1xcQ2xpZW50QXBwL2FwcFxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBYTtFQUNiLFlBQVc7RUFDWCwwQkNKYTtFREtiLGdIQ1NtRztFRFJuRyxXQUFVO0VBQ1YsbUJBQWlCLEVBVXBCO0VBaEJEO0lBUVEsV0FBUztJQUNULDBCQ1JRO0lEU1IsWUFBVTtJQUNWLGdIQ0UrRjtJREQvRixtQkFBa0I7SUFDbEIsVUFBUztJQUNULGFBQVksRUFDZiIsImZpbGUiOiJhcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQnLi4vX3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbiNnZGItZm9vdGVyIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1mb290ZXI7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAuZ2RiLXN0cmlwZSB7XHJcbiAgICAgICAgei1pbmRleDowO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6JHAtZGFyaztcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctZm9vdGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC05cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59Iiwi77u/Ly8gdmFyaWFibGVzLnNjc3NcclxuJHByaW1hcnk6ICMwM2E5ZjQ7XHJcbiRwLWxpZ2h0OiAjNjdkYWZmO1xyXG4kcC1kYXJrOiAjMDA3YWMxO1xyXG5cclxuJHkteWVsbG93OiAjZmZkNzQwO1xyXG5cclxuJHNlY29uZGFyeTogIzRjYWY1MDtcclxuXHJcbiRidXR0b24tZm9udDogI2ZmZjtcclxuXHJcbiRndXR0ZXJzLW1haW46IDFyZW0gN3JlbTtcclxuXHJcbiRzaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuXHJcbiRzaGFkb3ctZm9vdGVyOiAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMik7Il19 */"

/***/ }),

/***/ "./app/footer/footer.component.ts":
/*!****************************************!*\
  !*** ./app/footer/footer.component.ts ***!
  \****************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./app/gd-hero/gd-hero.component.html":
/*!********************************************!*\
  !*** ./app/gd-hero/gd-hero.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"gdb-hero\" class=\"flex-container\">\r\n    Angella's sexy blog!\r\n</div>\n"

/***/ }),

/***/ "./app/gd-hero/gd-hero.component.scss":
/*!********************************************!*\
  !*** ./app/gd-hero/gd-hero.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#gdb-hero {\n  height: 340px;\n  background-color: #007ac1;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  display: flex;\n  color: #fff;\n  font-weight: bold;\n  text-align: center;\n  line-height: 300px;\n  font-size: 2em;\n  font-family: Roboto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9nZC1oZXJvL0M6XFxVc2Vyc1xcamRlY2tcXFNvdXJjZVxcUmVwb3NcXEdvRGlzbmV5QmxvZ1xcR29EaXNuZXlCbG9nXFxDbGllbnRBcHAvYXBwXFxnZC1oZXJvXFxnZC1oZXJvLmNvbXBvbmVudC5zY3NzIiwiYXBwL2dkLWhlcm8vQzpcXFVzZXJzXFxqZGVja1xcU291cmNlXFxSZXBvc1xcR29EaXNuZXlCbG9nXFxHb0Rpc25leUJsb2dcXENsaWVudEFwcC9hcHBcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQWE7RUFDYiwwQkNEWTtFREVaLGdIQ1E0RjtFRFA1RixjQUFZO0VBQ1osWUFBVztFQUNYLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxvQkFBbUIsRUFDdEIiLCJmaWxlIjoiYXBwL2dkLWhlcm8vZ2QtaGVyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQnLi4vX3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbiNnZGItaGVybyB7XHJcbiAgICBoZWlnaHQ6IDM0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHAtZGFyaztcclxuICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG59Iiwi77u/Ly8gdmFyaWFibGVzLnNjc3NcclxuJHByaW1hcnk6ICMwM2E5ZjQ7XHJcbiRwLWxpZ2h0OiAjNjdkYWZmO1xyXG4kcC1kYXJrOiAjMDA3YWMxO1xyXG5cclxuJHkteWVsbG93OiAjZmZkNzQwO1xyXG5cclxuJHNlY29uZGFyeTogIzRjYWY1MDtcclxuXHJcbiRidXR0b24tZm9udDogI2ZmZjtcclxuXHJcbiRndXR0ZXJzLW1haW46IDFyZW0gN3JlbTtcclxuXHJcbiRzaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuXHJcbiRzaGFkb3ctZm9vdGVyOiAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMik7Il19 */"

/***/ }),

/***/ "./app/gd-hero/gd-hero.component.ts":
/*!******************************************!*\
  !*** ./app/gd-hero/gd-hero.component.ts ***!
  \******************************************/
/*! exports provided: GdHeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GdHeroComponent", function() { return GdHeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GdHeroComponent = /** @class */ (function () {
    function GdHeroComponent() {
    }
    GdHeroComponent.prototype.ngOnInit = function () {
    };
    GdHeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gdb-hero',
            template: __webpack_require__(/*! ./gd-hero.component.html */ "./app/gd-hero/gd-hero.component.html"),
            styles: [__webpack_require__(/*! ./gd-hero.component.scss */ "./app/gd-hero/gd-hero.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GdHeroComponent);
    return GdHeroComponent;
}());



/***/ }),

/***/ "./app/gdb-menu/gdb-menu.component.html":
/*!**********************************************!*\
  !*** ./app/gdb-menu/gdb-menu.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"gdb-menu\">\r\n    <button mat-button>Home</button>\r\n    <button mat-button>About Us</button>\r\n    <button mat-button [matMenuTriggerFor]=\"menu\">Contact</button>\r\n    <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item>Item 1</button>\r\n        <button mat-menu-item>Item 2</button>\r\n    </mat-menu>\r\n</div>"

/***/ }),

/***/ "./app/gdb-menu/gdb-menu.component.scss":
/*!**********************************************!*\
  !*** ./app/gdb-menu/gdb-menu.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gdb-menu .mat-button {\n  font-size: 1.25rem; }\n\n@media (max-width: 720px) {\n  .gdb-menu {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9nZGItbWVudS9DOlxcVXNlcnNcXGpkZWNrXFxTb3VyY2VcXFJlcG9zXFxHb0Rpc25leUJsb2dcXEdvRGlzbmV5QmxvZ1xcQ2xpZW50QXBwL2FwcFxcZ2RiLW1lbnVcXGdkYi1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsbUJBQWtCLEVBQ3JCOztBQUdMO0VBQ0k7SUFDSSxjQUFhLEVBQ2hCLEVBQUEiLCJmaWxlIjoiYXBwL2dkYi1tZW51L2dkYi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdkYi1tZW51IHtcclxuICAgIC5tYXQtYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6ICc3MjBweCcpe1xyXG4gICAgLmdkYi1tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./app/gdb-menu/gdb-menu.component.ts":
/*!********************************************!*\
  !*** ./app/gdb-menu/gdb-menu.component.ts ***!
  \********************************************/
/*! exports provided: GdbMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GdbMenuComponent", function() { return GdbMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GdbMenuComponent = /** @class */ (function () {
    function GdbMenuComponent() {
    }
    GdbMenuComponent.prototype.ngOnInit = function () {
    };
    GdbMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gdb-menu',
            template: __webpack_require__(/*! ./gdb-menu.component.html */ "./app/gdb-menu/gdb-menu.component.html"),
            styles: [__webpack_require__(/*! ./gdb-menu.component.scss */ "./app/gdb-menu/gdb-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GdbMenuComponent);
    return GdbMenuComponent;
}());



/***/ }),

/***/ "./app/main-content/main-content.component.html":
/*!******************************************************!*\
  !*** ./app/main-content/main-content.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div id=\"main-content\" class=\"flex-container\">\r\n    <gdb-card></gdb-card>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./app/main-content/main-content.component.scss":
/*!******************************************************!*\
  !*** ./app/main-content/main-content.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-content {\n  margin: 1rem 7rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluLWNvbnRlbnQvQzpcXFVzZXJzXFxqZGVja1xcU291cmNlXFxSZXBvc1xcR29EaXNuZXlCbG9nXFxHb0Rpc25leUJsb2dcXENsaWVudEFwcC9hcHBcXG1haW4tY29udGVudFxcbWFpbi1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwiYXBwL21haW4tY29udGVudC9DOlxcVXNlcnNcXGpkZWNrXFxTb3VyY2VcXFJlcG9zXFxHb0Rpc25leUJsb2dcXEdvRGlzbmV5QmxvZ1xcQ2xpZW50QXBwL2FwcFxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JDUW9CLEVEUHZCIiwiZmlsZSI6ImFwcC9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCcuLi9fdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuI21haW4tY29udGVudCB7XHJcbiAgICBtYXJnaW46ICRndXR0ZXJzLW1haW47XHJcbn0iLCLvu78vLyB2YXJpYWJsZXMuc2Nzc1xyXG4kcHJpbWFyeTogIzAzYTlmNDtcclxuJHAtbGlnaHQ6ICM2N2RhZmY7XHJcbiRwLWRhcms6ICMwMDdhYzE7XHJcblxyXG4keS15ZWxsb3c6ICNmZmQ3NDA7XHJcblxyXG4kc2Vjb25kYXJ5OiAjNGNhZjUwO1xyXG5cclxuJGJ1dHRvbi1mb250OiAjZmZmO1xyXG5cclxuJGd1dHRlcnMtbWFpbjogMXJlbSA3cmVtO1xyXG5cclxuJHNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG5cclxuJHNoYWRvdy1mb290ZXI6IDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKTsiXX0= */"

/***/ }),

/***/ "./app/main-content/main-content.component.ts":
/*!****************************************************!*\
  !*** ./app/main-content/main-content.component.ts ***!
  \****************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainContentComponent = /** @class */ (function () {
    function MainContentComponent() {
    }
    MainContentComponent.prototype.ngOnInit = function () {
    };
    MainContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-content',
            template: __webpack_require__(/*! ./main-content.component.html */ "./app/main-content/main-content.component.html"),
            styles: [__webpack_require__(/*! ./main-content.component.scss */ "./app/main-content/main-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./app/services/data.service.ts":
/*!**************************************!*\
  !*** ./app/services/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.cards = [];
    }
    DataService.prototype.loadCards = function () {
        var _this = this;
        return this.http.get("/api/cards")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            _this.cards = data;
            return true;
        }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./app/shared/material.module.ts":
/*!***************************************!*\
  !*** ./app/shared/material.module.ts ***!
  \***************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "../node_modules/@angular/cdk/esm5/table.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./app/side-bar/side-bar.component.html":
/*!**********************************************!*\
  !*** ./app/side-bar/side-bar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"sidebar-card\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Angella Decker</mat-card-title>\r\n        <mat-card-subtitle>About me</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <!--<img mat-card-image src=\"#\" alt=\"Photo of a Shiba Inu\">-->\r\n    <mat-card-content>\r\n        <p>\r\n            Lorem \r\n        </p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-mini-fab color=\"primary\">f</button>\r\n    </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "./app/side-bar/side-bar.component.scss":
/*!**********************************************!*\
  !*** ./app/side-bar/side-bar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-card {\n  max-width: 25%;\n  margin: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaWRlLWJhci9DOlxcVXNlcnNcXGpkZWNrXFxTb3VyY2VcXFJlcG9zXFxHb0Rpc25leUJsb2dcXEdvRGlzbmV5QmxvZ1xcQ2xpZW50QXBwL2FwcFxcc2lkZS1iYXJcXHNpZGUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYztFQUNkLGFBQVksRUFDZiIsImZpbGUiOiJhcHAvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhci1jYXJkIHtcclxuICAgIG1heC13aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./app/side-bar/side-bar.component.ts":
/*!********************************************!*\
  !*** ./app/side-bar/side-bar.component.ts ***!
  \********************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideBarComponent = /** @class */ (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./app/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.scss */ "./app/side-bar/side-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./app/side-nav/side-nav.component.html":
/*!**********************************************!*\
  !*** ./app/side-nav/side-nav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-toolbar></app-toolbar>\r\n<app-gdb-hero></app-gdb-hero>\r\n<router-outlet></router-outlet>\r\n\r\n<mat-drawer-container class=\"example-container\">\r\n    <mat-drawer mode=\"side\" opened>Drawer content</mat-drawer>\r\n    <mat-drawer-content>Main content</mat-drawer-content>\r\n</mat-drawer-container>\r\n<app-footer></app-footer>-->\r\n\r\n\r\n\r\n<mat-sidenav-container class=\"example-container\">\r\n    <mat-sidenav class=\"example-sidenav mat-elevation-z10\" #sidenav mode=\"side\" [opened]=\"!isScreenSmall()\" \r\n                                                                                [mode]=\"isScreenSmall() ? 'over': 'side'\">\r\n       <app-sidenav-toolbar></app-sidenav-toolbar>\r\n        <mat-list role=\"list\">\r\n            <mat-list-item role=\"listitem\"> <a routerLink=\"/main\" routerLinkActive=\"active\">Main</a></mat-list-item>\r\n            <mat-list-item role=\"listitem\"><a routerLink=\"/about\" routerLinkActive=\"active\">About</a></mat-list-item>\r\n            <mat-list-item role=\"listitem\"><a routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a></mat-list-item>\r\n        </mat-list>\r\n    </mat-sidenav>\r\n    \r\n    <mat-sidenav-content>\r\n        <app-toolbar (toggleSidenav)=\"sidenav.toggle()\"></app-toolbar>\r\n        <app-gdb-hero></app-gdb-hero>\r\n       \r\n        <div id=\"main-content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <app-footer></app-footer>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./app/side-nav/side-nav.component.scss":
/*!**********************************************!*\
  !*** ./app/side-nav/side-nav.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  flex: 1;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  position: absolute; }\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center; }\n\n.example-sidenav {\n  width: 280px;\n  background-color: #007ac1; }\n\n.content-wrapper {\n  margin: 1rem 7rem; }\n\n.mat-list-item {\n  color: #fff; }\n\n.mat-list-base {\n  padding-top: 80px;\n  color: #fff; }\n\n.mat-list-base a {\n    color: #fff; }\n\n.mat-list-base a a:link {\n      text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaWRlLW5hdi9DOlxcVXNlcnNcXGpkZWNrXFxTb3VyY2VcXFJlcG9zXFxHb0Rpc25leUJsb2dcXEdvRGlzbmV5QmxvZ1xcQ2xpZW50QXBwL2FwcFxcc2lkZS1uYXZcXHNpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwiYXBwL3NpZGUtbmF2L0M6XFxVc2Vyc1xcamRlY2tcXFNvdXJjZVxcUmVwb3NcXEdvRGlzbmV5QmxvZ1xcR29EaXNuZXlCbG9nXFxDbGllbnRBcHAvYXBwXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxRQUFPO0VBQ1AsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBRXJCOztBQUVEO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLDBCQ2hCWSxFRGlCZjs7QUFFRDtFQUNJLGtCQ1pvQixFRGF2Qjs7QUFFRDtFQUNJLFlDbEJjLEVEbUJqQjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixZQUFXLEVBUWQ7O0FBVkQ7SUFLUSxZQUFXLEVBSWQ7O0FBVEw7TUFPWSxzQkFBcUIsRUFDeEIiLCJmaWxlIjoiYXBwL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCcuLi9fdmFyaWFibGVzLnNjc3MnO1xyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy9tYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcC1kYXJrO1xyXG59XHJcblxyXG4uY29udGVudC13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogJGd1dHRlcnMtbWFpbjtcclxufVxyXG5cclxuLm1hdC1saXN0LWl0ZW0ge1xyXG4gICAgY29sb3I6ICRidXR0b24tZm9udDtcclxufVxyXG5cclxuLm1hdC1saXN0LWJhc2Uge1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICBhe1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGE6bGluayB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwi77u/Ly8gdmFyaWFibGVzLnNjc3NcclxuJHByaW1hcnk6ICMwM2E5ZjQ7XHJcbiRwLWxpZ2h0OiAjNjdkYWZmO1xyXG4kcC1kYXJrOiAjMDA3YWMxO1xyXG5cclxuJHkteWVsbG93OiAjZmZkNzQwO1xyXG5cclxuJHNlY29uZGFyeTogIzRjYWY1MDtcclxuXHJcbiRidXR0b24tZm9udDogI2ZmZjtcclxuXHJcbiRndXR0ZXJzLW1haW46IDFyZW0gN3JlbTtcclxuXHJcbiRzaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuXHJcbiRzaGFkb3ctZm9vdGVyOiAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMik7Il19 */"

/***/ }),

/***/ "./app/side-nav/side-nav.component.ts":
/*!********************************************!*\
  !*** ./app/side-nav/side-nav.component.ts ***!
  \********************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SMALL_WIDTH_BREAKPOINT = 720;
var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(zone) {
        var _this = this;
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px");
        this.events = [];
        this.mediaMatcher.addListener(function (mql) {
            return zone.run(function () { return _this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)"); });
        });
    }
    SideNavComponent.prototype.isScreenSmall = function () {
        return this.mediaMatcher.matches;
    };
    SideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./app/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./app/side-nav/side-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./app/sidenav-toolbar/sidenav-toolbar.component.html":
/*!************************************************************!*\
  !*** ./app/sidenav-toolbar/sidenav-toolbar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"gdb-nav-toolbar\">\r\n    <span><button mat-fab>GDB</button></span><span id=\"brand\"> go<span class=\"unique-logo\">Disney</span>blog</span>\r\n</mat-toolbar>\r\n\r\n"

/***/ }),

/***/ "./app/sidenav-toolbar/sidenav-toolbar.component.scss":
/*!************************************************************!*\
  !*** ./app/sidenav-toolbar/sidenav-toolbar.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gdb-nav-toolbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  z-index: 5;\n  background-color: #03a9f4;\n  color: #fff;\n  width: 280px; }\n  .gdb-nav-toolbar .mat-fab {\n    color: #fff;\n    font-weight: bold;\n    margin-right: 0.5rem; }\n  .gdb-nav-toolbar #brand {\n    font-weight: bold; }\n  .gdb-nav-toolbar #brand .unique-logo {\n      font-size: 2.5rem;\n      font-weight: bold; }\n  .gdb-nav-toolbar .example-icon {\n    padding: 0 14px; }\n  .gdb-nav-toolbar .example-spacer {\n    flex: 1 1 auto; }\n  .gdb-nav-toolbar .gdb-flex-menu {\n    flex: 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaWRlbmF2LXRvb2xiYXIvQzpcXFVzZXJzXFxqZGVja1xcU291cmNlXFxSZXBvc1xcR29EaXNuZXlCbG9nXFxHb0Rpc25leUJsb2dcXENsaWVudEFwcC9hcHBcXHNpZGVuYXYtdG9vbGJhclxcc2lkZW5hdi10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwiYXBwL3NpZGVuYXYtdG9vbGJhci9DOlxcVXNlcnNcXGpkZWNrXFxTb3VyY2VcXFJlcG9zXFxHb0Rpc25leUJsb2dcXEdvRGlzbmV5QmxvZ1xcQ2xpZW50QXBwL2FwcFxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQWU7RUFDZixPQUFNO0VBQ04sUUFBTztFQUNQLGdIQ080RjtFRE41RixXQUFVO0VBQ1YsMEJDUGE7RURRYixZQUFXO0VBQ1gsYUFBWSxFQTZCZjtFQXJDRDtJQVlRLFlBQVc7SUFDWCxrQkFBaUI7SUFDakIscUJBQW9CLEVBQ3ZCO0VBZkw7SUFrQlEsa0JBQWlCLEVBTXBCO0VBeEJMO01BcUJZLGtCQUFpQjtNQUNqQixrQkFBaUIsRUFDcEI7RUF2QlQ7SUEyQlEsZ0JBQWUsRUFDbEI7RUE1Qkw7SUErQlEsZUFBYyxFQUNqQjtFQWhDTDtJQW1DUSxhQUFZLEVBQ2YiLCJmaWxlIjoiYXBwL3NpZGVuYXYtdG9vbGJhci9zaWRlbmF2LXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0Jy4uL192YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4uZ2RiLW5hdi10b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcblxyXG4gICAgLm1hdC1mYWIge1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAjYnJhbmQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgICAudW5pcXVlLWxvZ28ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5leGFtcGxlLWljb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5nZGItZmxleC1tZW51IHtcclxuICAgICAgICBmbGV4OiAxIGF1dG87XHJcbiAgICB9XHJcbn1cclxuIiwi77u/Ly8gdmFyaWFibGVzLnNjc3NcclxuJHByaW1hcnk6ICMwM2E5ZjQ7XHJcbiRwLWxpZ2h0OiAjNjdkYWZmO1xyXG4kcC1kYXJrOiAjMDA3YWMxO1xyXG5cclxuJHkteWVsbG93OiAjZmZkNzQwO1xyXG5cclxuJHNlY29uZGFyeTogIzRjYWY1MDtcclxuXHJcbiRidXR0b24tZm9udDogI2ZmZjtcclxuXHJcbiRndXR0ZXJzLW1haW46IDFyZW0gN3JlbTtcclxuXHJcbiRzaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuXHJcbiRzaGFkb3ctZm9vdGVyOiAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMik7Il19 */"

/***/ }),

/***/ "./app/sidenav-toolbar/sidenav-toolbar.component.ts":
/*!**********************************************************!*\
  !*** ./app/sidenav-toolbar/sidenav-toolbar.component.ts ***!
  \**********************************************************/
/*! exports provided: SidenavToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavToolbarComponent", function() { return SidenavToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavToolbarComponent = /** @class */ (function () {
    function SidenavToolbarComponent() {
    }
    SidenavToolbarComponent.prototype.ngOnInit = function () {
    };
    SidenavToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav-toolbar',
            template: __webpack_require__(/*! ./sidenav-toolbar.component.html */ "./app/sidenav-toolbar/sidenav-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-toolbar.component.scss */ "./app/sidenav-toolbar/sidenav-toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavToolbarComponent);
    return SidenavToolbarComponent;
}());



/***/ }),

/***/ "./app/toolbar/toolbar.component.html":
/*!********************************************!*\
  !*** ./app/toolbar/toolbar.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"go-toolbar\">\r\n    <mat-toolbar-row>\r\n        <span><button mat-fab>GDB</button></span><span id=\"brand\"> go<span class=\"unique-logo\">Disney</span>blog</span>\r\n        <span class=\"example-spacer\"></span>\r\n        <span class=\"gdb-flex-menu\"><app-gdb-menu></app-gdb-menu></span>\r\n        <mat-icon (click)=\"toggleSidenav.emit()\">menu</mat-icon>\r\n        <mat-icon class=\"example-icon\">verified_user</mat-icon>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n "

/***/ }),

/***/ "./app/toolbar/toolbar.component.scss":
/*!********************************************!*\
  !*** ./app/toolbar/toolbar.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".go-toolbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  z-index: 5;\n  background-color: #03a9f4;\n  color: #fff; }\n  .go-toolbar .mat-fab {\n    color: #fff;\n    font-weight: bold;\n    margin-right: 0.5rem; }\n  .go-toolbar #brand {\n    font-weight: bold; }\n  .go-toolbar #brand .unique-logo {\n      font-size: 2.5rem;\n      font-weight: bold; }\n  .go-toolbar .example-icon {\n    padding: 0 14px; }\n  .go-toolbar .example-spacer {\n    flex: 1 1 auto; }\n  .go-toolbar .gdb-flex-menu {\n    flex: 1 auto; }\n  .go-toolbar .toggle-sidebar {\n    display: none; }\n  @media (max-width: 720px) {\n    .go-toolbar .sidebar-toggle {\n      display: flex; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b29sYmFyL0M6XFxVc2Vyc1xcamRlY2tcXFNvdXJjZVxcUmVwb3NcXEdvRGlzbmV5QmxvZ1xcR29EaXNuZXlCbG9nXFxDbGllbnRBcHAvYXBwXFx0b29sYmFyXFx0b29sYmFyLmNvbXBvbmVudC5zY3NzIiwiYXBwL3Rvb2xiYXIvQzpcXFVzZXJzXFxqZGVja1xcU291cmNlXFxSZXBvc1xcR29EaXNuZXlCbG9nXFxHb0Rpc25leUJsb2dcXENsaWVudEFwcC9hcHBcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFFBQU87RUFDUCxnSENRNEY7RURQNUYsV0FBVTtFQUNWLDBCQ05hO0VET2IsWUFBVyxFQXVDZDtFQTlDRDtJQVdRLFlBQVc7SUFDWCxrQkFBaUI7SUFDakIscUJBQW9CLEVBQ3ZCO0VBZEw7SUFpQlEsa0JBQWlCLEVBTXBCO0VBdkJMO01Bb0JZLGtCQUFpQjtNQUNqQixrQkFBaUIsRUFDcEI7RUF0QlQ7SUEwQlEsZ0JBQWUsRUFDbEI7RUEzQkw7SUE4QlEsZUFBYyxFQUNqQjtFQS9CTDtJQWtDUSxhQUFZLEVBQ2Y7RUFuQ0w7SUFzQ1EsY0FBWSxFQUNmO0VBRUQ7SUF6Q0o7TUEyQ1ksY0FBYSxFQUNoQixFQUFBIiwiZmlsZSI6ImFwcC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0Jy4uL192YXJpYWJsZXMuc2Nzcyc7XHJcbi5nby10b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgLm1hdC1mYWIge1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAjYnJhbmQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgICAudW5pcXVlLWxvZ28ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5leGFtcGxlLWljb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5nZGItZmxleC1tZW51IHtcclxuICAgICAgICBmbGV4OiAxIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnRvZ2dsZS1zaWRlYmFyIHtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogJzcyMHB4Jyl7XHJcbiAgICAgICAgLnNpZGViYXItdG9nZ2xlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9IFxyXG4gICAgICAgIH07XHJcbn1cclxuIiwi77u/Ly8gdmFyaWFibGVzLnNjc3NcclxuJHByaW1hcnk6ICMwM2E5ZjQ7XHJcbiRwLWxpZ2h0OiAjNjdkYWZmO1xyXG4kcC1kYXJrOiAjMDA3YWMxO1xyXG5cclxuJHkteWVsbG93OiAjZmZkNzQwO1xyXG5cclxuJHNlY29uZGFyeTogIzRjYWY1MDtcclxuXHJcbiRidXR0b24tZm9udDogI2ZmZjtcclxuXHJcbiRndXR0ZXJzLW1haW46IDFyZW0gN3JlbTtcclxuXHJcbiRzaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuXHJcbiRzaGFkb3ctZm9vdGVyOiAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMik7Il19 */"

/***/ }),

/***/ "./app/toolbar/toolbar.component.ts":
/*!******************************************!*\
  !*** ./app/toolbar/toolbar.component.ts ***!
  \******************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "toggleSidenav", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./app/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./app/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jdeck\Source\Repos\GoDisneyBlog\GoDisneyBlog\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map