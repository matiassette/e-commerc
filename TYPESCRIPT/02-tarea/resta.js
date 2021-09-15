"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resta = void 0;
var Resta = /** @class */ (function () {
    function Resta(num1, num2) {
        var _this = this;
        this.restar = function () {
            return _this.miNum1 - _this.miNum2;
        };
        this.miNum1 = num1;
        this.miNum2 = num2;
    }
    return Resta;
}());
exports.Resta = Resta;
