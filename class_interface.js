"use strict";
exports.__esModule = true;
var transportes_1 = require("./transportes");
var carro = new transportes_1.Carro();
carro.locomover_se();
var aviao = new transportes_1.Aviao;
var ameacador = function (aviao) {
    // HACK: Lembrei dele!
    return !!aviao.poderDestrutivo;
};
console.log('O avião instanciado é ameaçador? ' + ameacador(aviao));
