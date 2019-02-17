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
import { Card } from 'ClientApp/app/models/card';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
var SelectCardComponent = /** @class */ (function () {
    function SelectCardComponent(data, router) {
        this.data = data;
        this.router = router;
        this.cards = [];
        this.selected = false;
    }
    //paraOne: FormControl;
    //paraTwo: FormControl;
    //paraThree: FormControl;
    //paraFour: FormControl;
    SelectCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.card = new Card();
        this.data.loadCards()
            .subscribe(function (success) {
            if (success) {
                _this.cards = _this.data.cards;
            }
        });
        var cardTitle = new FormControl('', [Validators.required]);
        var cardIcon = new FormControl('');
        var cardImg = new FormControl('');
        var cardLink = new FormControl('');
        var cardLinkName = new FormControl('');
        //let paraOne = new FormControl('');
        //let paraTwo = new FormControl('');
        //let paraThree = new FormControl('');
        //let paraFour = new FormControl('');
        this.updateCardForm = new FormGroup({
            cardTitle: cardTitle,
            cardIcon: cardIcon,
            cardImg: cardImg,
            cardLink: cardLink,
            cardLinkName: cardLinkName,
        });
    }; /////end of onInit
    SelectCardComponent.prototype.getErrorMessage = function () {
        return this.cardTitle.hasError('required') ? 'You must enter a value' : '';
    };
    SelectCardComponent.prototype.saveFormData = function (formValue) {
        var _this = this;
        this.data.updateCard(this.card.thisCardId, formValue)
            .subscribe(function (success) {
            if (success) {
                _this.card = new Card();
                console.log(_this.card);
                return true;
            }
        });
        console.log(formValue);
    };
    SelectCardComponent.prototype.selectName = function (formValue) {
        var _this = this;
        this.data.getCardByName(formValue)
            .subscribe(function (success) {
            if (success) {
                _this.card = _this.data.card;
                _this.selected = true;
                _this.cardTitle = new FormControl(_this.card.cardTitle);
                _this.cardIcon = new FormControl(_this.card.cardIcon);
                _this.cardImg = new FormControl(_this.card.cardImg);
                _this.cardLink = new FormControl(_this.card.cardLink);
                _this.cardLinkName = new FormControl(_this.card.cardLinkName);
                //this.paraOne = new FormControl('');
                //this.paraOne = new FormControl('');
                //this.paraOne = new FormControl('');
                //this.paraOne = new FormControl('');
                _this.updateCardForm = new FormGroup({
                    cardTitle: _this.cardTitle,
                    cardIcon: _this.cardIcon,
                    cardImg: _this.cardImg,
                    cardLink: _this.cardLink,
                    cardLinkName: _this.cardLinkName,
                });
            }
        });
    };
    SelectCardComponent.prototype.cancel = function () {
        this.router.navigate(["/"]);
    };
    SelectCardComponent = __decorate([
        Component({
            selector: 'app-select-card',
            templateUrl: './select-card.component.html',
            styleUrls: ['./select-card.component.scss']
        }),
        __metadata("design:paramtypes", [DataService, Router])
    ], SelectCardComponent);
    return SelectCardComponent;
}());
export { SelectCardComponent };
//# sourceMappingURL=select-card.component.js.map