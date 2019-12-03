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
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { UserKey } from '../models/userKey';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, data) {
        this.route = route;
        this.data = data;
        this.hide = true;
        this.storeCred = [];
        this.keyArr = [];
        this.errMessage = '';
        this.creds = {
            username: '',
            password: ''
        };
        this.checked = false;
        this.uncheck();
        console.log(this.data.loginRequired);
    }
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.data.login(this.creds)
            .subscribe(function (success) {
            if (success) {
                _this.route.navigate(["select-card"]);
                if (_this.checked == true) {
                    var myLocal = JSON.stringify(_this.creds);
                    var encCreds = btoa(myLocal);
                    localStorage.setItem('exp', encCreds);
                }
                _this.enc(_this.creds);
            }
        }, function (err) { return _this.errMessage = "Failed to login"; });
    };
    LoginComponent.prototype.ngOnInit = function () {
        var credentials = localStorage.getItem('exp');
        if (credentials != undefined) {
            var dec = JSON.parse(atob(credentials));
            this.creds.username = dec.username;
            this.creds.password = dec.password;
            this.checked = true;
        }
        this.dec();
    };
    LoginComponent.prototype.uncheck = function () {
        if (this.checked == true) {
            localStorage.removeItem('exp');
            this.checked != this.checked;
            this.creds.username = '';
            this.creds.password = '';
        }
    };
    LoginComponent.prototype.enc = function (str) {
        var _this = this;
        var uName = str.username;
        var uPass = str.password;
        var dumStr = 'jhbkfjbkjbfavf';
        var concat = uName + dumStr + uPass;
        for (var i = 0; i < concat.length; i++) {
            var keyNum = Math.random() * 10;
            var ascVal = concat.charCodeAt(i);
            keyNum = Math.floor(keyNum);
            var newVal = ascVal + keyNum;
            var curr = String.fromCharCode(newVal);
            this.keyArr.push(keyNum); // needs to be saved to db
            this.storeCred.push(curr);
        }
        var encCred = this.storeCred.join("");
        var encKey = this.keyArr.join("");
        console.log(encKey);
        //var userKey = JSON.stringify(encKey); 
        this.data.saveUserKey(encKey)
            .subscribe(function (success) {
            _this.userKey.userKey = encKey;
            _this.userKey = new UserKey();
        });
        localStorage.setItem('xyzz', encCred);
        return encCred;
    };
    LoginComponent.prototype.dec = function () {
        var encCred = localStorage.getItem('xyzz');
        console.log(encCred);
        for (var i = 0; i < encCred.length; i++) {
            var ascVal = encCred.charCodeAt(i);
            console.log(this.keyArr[i]);
            ascVal -= this.keyArr[i];
            var decSt = String.fromCharCode(ascVal[i]);
            console.log(decSt);
        }
        return;
    };
    LoginComponent.prototype.cancel = function () {
        this.route.navigate(["/"]);
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [Router, DataService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map