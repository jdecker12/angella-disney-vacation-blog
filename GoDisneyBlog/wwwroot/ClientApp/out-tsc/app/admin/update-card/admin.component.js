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
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Card } from '../../models/card';
var AdminComponent = /** @class */ (function () {
    function AdminComponent(data, route, actRoute) {
        this.data = data;
        this.route = route;
        this.actRoute = actRoute;
        this.cards = [];
        this.cardTitle = new FormControl('', [Validators.required]);
        this.cardImg = new FormControl('', [Validators.required]);
        this.cardIcon = new FormControl('', [Validators.required]);
        this.cardLink = new FormControl('', [Validators.required]);
        this.cardLinkName = new FormControl('', [Validators.required]);
        this.paraOne = new FormControl('', [Validators.required]);
        this.paraTwo = new FormControl('');
        this.paraThree = new FormControl('');
        this.paraFour = new FormControl('');
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.card = new Card();
        this.data.loadCards()
            .subscribe(function (success) {
            if (success) {
                _this.cards = _this.data.cards;
            }
            else {
                console.log('Something went wrong');
                return false;
            }
        });
    };
    AdminComponent.prototype.getErrorMessage2 = function () {
        return this.cardTitle.hasError('required') ? 'You must enter a value' : '';
    };
    AdminComponent.prototype.setCardId = function (formValue) {
        var _this = this;
        this.data.getCardByName(formValue)
            .subscribe(function (success) {
            if (success) {
                _this.card = _this.data.card;
                _this.cardTitle = new FormControl(_this.card.cardTitle, [Validators.required]);
                _this.cardImg = new FormControl(_this.card.cardImg, [Validators.required]);
                _this.cardIcon = new FormControl(_this.card.cardIcon, [Validators.required]);
                _this.cardLink = new FormControl(_this.card.cardLink, [Validators.required]);
                _this.cardLinkName = new FormControl(_this.card.cardLinkName, [Validators.required]);
                _this.paraOne = new FormControl(_this.card.cardContents.map(function (p) { return p.paraOne; }), [Validators.required]);
                _this.paraTwo = new FormControl(_this.card.cardContents.map(function (p) { return p.paraTwo; }), [Validators.required]);
                _this.paraThree = new FormControl(_this.card.cardContents.map(function (p) { return p.paraThree; }), [Validators.required]);
                _this.paraFour = new FormControl(_this.card.cardContents.map(function (p) { return p.paraFour; }), [Validators.required]);
                // this.card = new Card();
                return _this.card;
            }
            else {
                console.log('Something went wrong');
                return false;
            }
        });
        console.log(formValue);
    };
    AdminComponent.prototype.submitCard = function () {
        var _this = this;
        console.log(this.card);
        this.data.updateCard(this.cardTitle.value, this.card)
            .subscribe(function (success) {
            if (success) {
                console.log(_this.card);
            }
            else {
                console.log('You didn\'t do something right but head');
            }
        });
    };
    AdminComponent.prototype.cancel = function () {
        this.route.navigate(['/']);
    };
    AdminComponent = __decorate([
        Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.scss']
        }),
        __metadata("design:paramtypes", [DataService, Router, ActivatedRoute])
    ], AdminComponent);
    return AdminComponent;
}());
export { AdminComponent };
//# sourceMappingURL=admin.component.js.map