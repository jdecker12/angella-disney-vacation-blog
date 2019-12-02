var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, Inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
var BtmSheetComponent = /** @class */ (function () {
    function BtmSheetComponent(_bottomSheet) {
        this._bottomSheet = _bottomSheet;
        this.asPrivacy = false;
        this.asTerms = false;
    }
    BtmSheetComponent.prototype.openBottomSheet = function () {
        this._bottomSheet.open(BottomSheetOverviewExampleSheet, { data: [this.asPrivacy, this.asTerms] });
    };
    BtmSheetComponent.prototype.ngOnInit = function () {
        console.log(this.terms);
        this.chooseDisclaimer();
    };
    BtmSheetComponent.prototype.chooseDisclaimer = function () {
        if (this.privacy) {
            this.labelText = 'Privacy Policy';
            this.asPrivacy = true;
        }
        else if (this.terms) {
            this.labelText = "Terms of Use";
            this.asTerms = true;
        }
        return true;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BtmSheetComponent.prototype, "privacy", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BtmSheetComponent.prototype, "terms", void 0);
    BtmSheetComponent = __decorate([
        Component({
            selector: 'app-btm-sheet',
            templateUrl: './btm-sheet.component.html',
            styleUrls: ['./btm-sheet.component.scss']
        }),
        __metadata("design:paramtypes", [MatBottomSheet])
    ], BtmSheetComponent);
    return BtmSheetComponent;
}()); //end class
export { BtmSheetComponent };
var BottomSheetOverviewExampleSheet = /** @class */ (function () {
    function BottomSheetOverviewExampleSheet(_bottomSheetRef, data) {
        this._bottomSheetRef = _bottomSheetRef;
        this.data = data;
        this.asPrivacy = this.data[0];
        this.asTerms = this.data[1];
    }
    BottomSheetOverviewExampleSheet.prototype.openLink = function (event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    };
    BottomSheetOverviewExampleSheet = __decorate([
        Component({
            selector: 'bottom-sheet-overview-example-sheet',
            templateUrl: 'bottom-sheet-overview-example-sheet.html',
        }),
        __param(1, Inject(MAT_BOTTOM_SHEET_DATA)),
        __metadata("design:paramtypes", [MatBottomSheetRef, Object])
    ], BottomSheetOverviewExampleSheet);
    return BottomSheetOverviewExampleSheet;
}()); //end class
export { BottomSheetOverviewExampleSheet };
//# sourceMappingURL=btm-sheet.component.js.map