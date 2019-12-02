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
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
var SelectCardComponent = /** @class */ (function () {
    function SelectCardComponent(data, router) {
        this.data = data;
        this.router = router;
        this.cards = [];
        this.selected = false;
    }
    SelectCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data.loginRequired) {
            this.router.navigate(['/login']);
        }
        this.card = new Card();
        this.data.loadCards()
            .subscribe(function (success) {
            if (success) {
                _this.cards = _this.data.cards;
            }
        });
        var radioGroup = new FormControl('new');
        var cardTitle = new FormControl();
        var cardCategory = new FormControl('Main');
        var cardIcon = new FormControl('');
        var cardImg = new FormControl('');
        var cardLink = new FormControl('');
        var cardLinkName = new FormControl('');
        var paraOne = new FormControl('');
        var paraTwo = new FormControl('');
        var paraThree = new FormControl('');
        var paraFour = new FormControl('');
        this.updateCardForm = new FormGroup({
            radioGroup: radioGroup,
            cardTitle: cardTitle,
            cardCategory: cardCategory,
            cardIcon: cardIcon,
            cardImg: cardImg,
            cardLink: cardLink,
            cardLinkName: cardLinkName,
            cardContents: new FormGroup({
                paraOne: paraOne,
                paraTwo: paraTwo,
                paraThree: paraThree,
                paraFour: paraFour,
            })
        });
    }; /////end of onInit
    SelectCardComponent.prototype.clearForm = function () {
        this.updateCardForm.reset();
        this.card.cardImg = '';
        this.card.cardIcon = '';
    };
    SelectCardComponent.prototype.getErrorMessage = function () {
        return this.cardTitle.hasError('required') ? 'You must enter a value' : '';
    };
    SelectCardComponent.prototype.updateFormData = function (formValue) {
        var _this = this;
        formValue.cardContents = [formValue.cardContents];
        this.data.updateCard(this.card.cardTitle, formValue)
            .subscribe(function (success) {
            if (success) {
                _this.card = new Card();
                _this.router.navigate(['/']);
                return true;
            }
        });
    };
    SelectCardComponent.prototype.saveFormData = function (formValue) {
        var _this = this;
        formValue.cardContents = [formValue.cardContents];
        this.data.admin(formValue)
            .subscribe(function (success) {
            if (success) {
                _this.card = new Card();
                _this.router.navigate(['/']);
                return true;
            }
        });
    };
    SelectCardComponent.prototype.getRadioVal = function () {
        this.isChecked = this.updateCardForm.get('radioGroup').value;
    };
    SelectCardComponent.prototype.deleteSelectCard = function () {
        var name = this.updateCardForm.get('cardTitle').value;
        this.data.deleteCard(name)
            .subscribe(function (success) {
            if (success) {
                return true;
            }
        });
        this.router.navigate(['/']);
    };
    SelectCardComponent.prototype.selectName = function (formValue) {
        var _this = this;
        this.data.getCardByName(formValue)
            .subscribe(function (success) {
            if (success) {
                _this.card = _this.data.card;
                _this.selected = true;
                var shortHand = _this.card.cardContents[0];
                (_this.isChecked == 'update') ? _this.radioGroup = new FormControl('update') : _this.radioGroup = new FormControl('delete');
                _this.cardTitle = new FormControl(_this.card.cardTitle);
                _this.cardCategory = new FormControl(_this.card.cardCategory);
                _this.cardIcon = new FormControl(_this.card.cardIcon);
                _this.cardImg = new FormControl(_this.card.cardImg);
                _this.cardLink = new FormControl(_this.card.cardLink);
                _this.cardLinkName = new FormControl(_this.card.cardLinkName);
                _this.paraOne = new FormControl(shortHand.paraOne);
                _this.paraTwo = new FormControl(shortHand.paraTwo);
                _this.paraThree = new FormControl(shortHand.paraThree);
                _this.paraFour = new FormControl(shortHand.paraFour);
                _this.updateCardForm = new FormGroup({
                    radioGroup: _this.radioGroup,
                    cardTitle: _this.cardTitle,
                    cardCategory: _this.cardCategory,
                    cardIcon: _this.cardIcon,
                    cardImg: _this.cardImg,
                    cardLink: _this.cardLink,
                    cardLinkName: _this.cardLinkName,
                    cardContents: new FormGroup({
                        paraOne: _this.paraOne,
                        paraTwo: _this.paraTwo,
                        paraThree: _this.paraThree,
                        paraFour: _this.paraFour,
                    })
                });
            }
        });
    };
    SelectCardComponent.prototype.cancel = function () {
        this.router.navigate(["/card"]);
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