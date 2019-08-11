var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(data, router) {
        this.data = data;
        this.router = router;
        this.toggleSidenav = new EventEmitter();
        this.goToAdmin = new EventEmitter();
        this.buttonText();
    }
    ToolbarComponent.prototype.onAdmin = function () {
        this.data.loginRequired ? this.router.navigate(['login']) : this.router.navigate(['select-card']);
    };
    ToolbarComponent.prototype.buttonText = function () {
        this.data.loginRequired ? this.update = 'login' : this.update = 'Create Content';
    };
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "toggleSidenav", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "goToAdmin", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ToolbarComponent.prototype, "navTrue", void 0);
    ToolbarComponent = __decorate([
        Component({
            selector: 'app-toolbar',
            templateUrl: './toolbar.component.html',
            styleUrls: ['./toolbar.component.scss']
        }),
        __metadata("design:paramtypes", [DataService, Router])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
export { ToolbarComponent };
//# sourceMappingURL=toolbar.component.js.map