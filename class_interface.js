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
var Transporte = /** @class */ (function () {
    function Transporte(velocidade) {
        this.velocidade = velocidade;
    }
    Transporte.prototype.locomover_se = function () {
        console.log("Locomovendo-se a " + this.velocidade + " km/h.");
    };
    return Transporte;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super.call(this, 200) || this;
    }
    return Carro;
}(Transporte));
var Aviao = /** @class */ (function (_super) {
    __extends(Aviao, _super);
    function Aviao() {
        return _super.call(this, 900) || this;
    }
    return Aviao;
}(Transporte));
var carro = new Carro();
var aviao = new Aviao;
carro.locomover_se();
aviao.locomover_se();
/*
class Eu {
    constructor(public peso: number) {

    }

    fazerSupino() {
        console.log(`Fazendo supino com ${this.peso} kg de cada lado.`)
    }
}

let eu = new Eu(15)

eu.fazerSupino()
*/ 
