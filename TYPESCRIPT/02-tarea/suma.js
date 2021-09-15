"use strict";
// export function suma(num1:number, num2:number){
//     return num1 + num1
// }
// export = suma
// module.exports = {suma}
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suma = void 0;
var Suma = /** @class */ (function () {
    function Suma(num1, num2) {
        var _this = this;
        this.sumar = function () {
            return _this.miNum1 + _this.miNum2;
        };
        this.miNum1 = num1;
        this.miNum2 = num2;
    }
    return Suma;
}());
exports.Suma = Suma;
