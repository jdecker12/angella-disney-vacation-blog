var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Card } from '../models/card';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.token = "";
        this.card = new Card();
        this.cards = [];
        this.cardContents = [];
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + this.token
            })
        };
    }
    DataService.prototype.loadCards = function () {
        var _this = this;
        return this.http.get("/api/cards")
            .pipe(map(function (data) {
            _this.cards = data;
            return true;
        }));
    };
    DataService.prototype.getCardById = function (id) {
        return this.cards.find(function (x) { return x.thisCardId == id; });
    };
    DataService.prototype.getMyCardById = function (id) {
        var _this = this;
        return this.http.get("/api/cards/" + id)
            .pipe(map(function (data) {
            _this.card = data;
            return true;
        }));
    };
    DataService.prototype.getCardByName = function (name) {
        var _this = this;
        return this.http.get("/api/cards/" + name)
            .pipe(map(function (data) {
            _this.card = data;
            return true;
        }));
    };
    Object.defineProperty(DataService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post("/Auth/CreateToken", creds)
            .pipe(map(function (data) {
            _this.token = data.token;
            _this.tokenExpiration = data.expiration;
            return true;
        }));
    };
    DataService.prototype.updateCard = function (name, data) {
        var _this = this;
        return this.http.put("/api/cards/" + name, data, {
            headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
        }).pipe(map(function (response) {
            _this.card = new Card();
            return true;
        }));
    };
    DataService.prototype.checkout = function () {
        var _this = this;
        return this.http.post("/api/orders", this.card, {
            headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
        })
            .pipe(map(function (response) {
            _this.card = new Card();
            return true;
        }));
    };
    DataService.prototype.admin = function (data) {
        var _this = this;
        return this.http.post("/api/cards", data, {
            headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
        })
            .pipe(map(function (response) {
            _this.card = new Card();
            return true;
        }));
    };
    DataService.prototype.deleteCard = function (name) {
        var _this = this;
        return this.http.delete("/api/cards/" + name, {
            headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
        })
            .pipe(map(function (response) {
            _this.card = null;
            return true;
        }));
    };
    DataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map