"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Transporte = /** @class */ (function () {
    function Transporte(velocidade) {
        this.velocidade = velocidade;
    }
    Transporte.prototype.locomover_se = function () {
        console.log("Carro locomovendo-se a " + this.velocidade + " km/h.");
    };
    return Transporte;
}());
var Aviao = /** @class */ (function (_super) {
    __extends(Aviao, _super);
    function Aviao() {
        var _this = _super.call(this, 900) || this;
        _this.poderDestrutivo = 9000;
        return _this;
    }
    return Aviao;
}(Transporte));
exports.Aviao = Aviao;
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super.call(this, 200) || this;
    }
    return Carro;
}(Transporte));
exports.Carro = Carro;
