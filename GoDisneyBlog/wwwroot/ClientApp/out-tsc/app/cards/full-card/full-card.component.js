var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
var FullCardComponent = /** @class */ (function () {
    function FullCardComponent(data, route) {
        this.data = data;
        this.route = route;
    }
    FullCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.card = _this.data.getCardById(id);
        });
    };
    FullCardComponent = __decorate([
        Component({
            selector: 'app-full-card',
            templateUrl: './full-card.component.html',
            styleUrls: ['./full-card.component.scss']
        }),
        __metadata("design:paramtypes", [DataService, ActivatedRoute])
    ], FullCardComponent);
    return FullCardComponent;
}());
export { FullCardComponent };
//# sourceMappingURL=full-card.component.js.map