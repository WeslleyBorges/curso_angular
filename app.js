console.log('aee');
var retornaParametro = function (numero) { return numero; };
console.log(retornaParametro(0));
var imprimeMensagemPronta = function () { return console.log('kkj eae men'); };
imprimeMensagemPronta();
// Declaração de uma variável que será uma função
var functionVar;
functionVar = function (msg) { return console.log(msg); };
functionVar('kkj eae men dnv');
function aumentoVelocidade(velocidade, aumento) {
    var aumentoLocal = aumento || 0; // aumento é um nullable parameter, pois é acompanhando da '?'
    return velocidade + aumentoLocal;
}
function aumentoVelocidade2(velocidade, aumento) {
    if (aumento === void 0) { aumento = 2; }
    // O parâmetro 'aumento' recebe um valor padrão caso este não receba nenhum valor
    return velocidade + aumento;
}
function retornaPositivos() {
    var arrayzin = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrayzin[_i] = arguments[_i];
    }
    return arrayzin.filter(function (elemento) { return elemento > 0; });
}
console.log(aumentoVelocidade(1, 2));
console.log(aumentoVelocidade2(2));
console.log(retornaPositivos(1, 0, -3, -7, 2));
