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
var CardComponent = /** @class */ (function () {
    function CardComponent(data) {
        this.data = data;
        this.initAnimation = false;
        this.cards = [];
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadCardsByCategory('Main')
            .subscribe(function (success) {
            if (success) {
                _this.cards = _this.data.cards;
                return true;
            }
        });
        this.animateOnScroll();
    }; //end onInit
    CardComponent.prototype.animateOnScroll = function () {
        var myWindow = document.getElementById('mat-sidenav-content');
        myWindow.onscroll = function () {
            var myElems = document.getElementsByClassName('go-dis-card');
            var cardArr = Array.from(myElems);
            console.log(cardArr);
            cardArr.forEach(function (element) {
                var myCard = element.getBoundingClientRect();
                if (myCard.top <= 413) {
                    element.classList.add('scroll-animation');
                }
            }); //end foreach
        }; //end onscroll
    }; //end amimateOnScroll
    CardComponent = __decorate([
        Component({
            selector: 'gdb-card',
            templateUrl: 'card.component.html',
            styleUrls: ['card.component.scss']
        }),
        __metadata("design:paramtypes", [DataService])
    ], CardComponent);
    return CardComponent;
}());
export { CardComponent };
//# sourceMappingURL=card.component.js.map