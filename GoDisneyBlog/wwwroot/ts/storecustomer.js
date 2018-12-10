var StoreCustomer = /** @class */ (function () {
    function StoreCustomer(mssg, fName, lName) {
        this.mssg = mssg;
        this.fName = fName;
        this.lName = lName;
        this.visits = 200;
    }
    Object.defineProperty(StoreCustomer.prototype, "name", {
        get: function () {
            return this.ourName;
        },
        set: function (val) {
            this.ourName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreCustomer.prototype, "introMssg", {
        get: function () {
            return this.introMssg;
        },
        set: function (val) {
            this.introMssg = this.ourMssg;
        },
        enumerable: true,
        configurable: true
    });
    StoreCustomer.prototype.showName = function () {
        console.log(this.mssg + " " + this.fName + " " + this.lName + " " + this.visits);
    };
    return StoreCustomer;
}());
//# sourceMappingURL=storecustomer.js.map