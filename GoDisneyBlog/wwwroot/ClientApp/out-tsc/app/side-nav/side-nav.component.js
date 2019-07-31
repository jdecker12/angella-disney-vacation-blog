var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgZone } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
var SMALL_WIDTH_BREAKPOINT = 720;
var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(zone, data, router) {
        var _this = this;
        this.data = data;
        this.router = router;
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px");
        this.events = [];
        this.mediaMatcher.addListener(function (mql) {
            return zone.run(function () { return _this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)"); });
        });
    }
    SideNavComponent.prototype.isScreenSmall = function () {
        return this.mediaMatcher.matches;
    };
    SideNavComponent.prototype.onAdmin = function () {
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        }
        else {
            this.router.navigate(["select-card"]);
        }
    };
    SideNavComponent = __decorate([
        Component({
            selector: 'app-side-nav',
            templateUrl: './side-nav.component.html',
            styleUrls: ['./side-nav.component.scss']
        }),
        __metadata("design:paramtypes", [NgZone, DataService, Router])
    ], SideNavComponent);
    return SideNavComponent;
}());
export { SideNavComponent };
//# sourceMappingURL=side-nav.component.js.map