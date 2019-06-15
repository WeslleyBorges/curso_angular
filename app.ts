console.log('aee')

let retornaParametro = (numero: number): number => numero 

console.log(retornaParametro(0))

let imprimeMensagemPronta = () => console.log('kkj eae men') 

imprimeMensagemPronta()

// Declaração de uma variável que será uma função
let functionVar: (msg: string) => string

functionVar = msg => console.log(msg)

functionVar('kkj eae men dnv')

function aumentoVelocidade(velocidade: number, aumento?: number): number {
    let aumentoLocal = aumento || 0 // aumento é um nullable parameter, pois é acompanhando da '?'
    return velocidade + aumentoLocal
}

function aumentoVelocidade2(velocidade: number, aumento: number = 2): number {
    // O parâmetro 'aumento' recebe um valor padrão caso este não receba nenhum valor
    return velocidade + aumento
}

function retornaPositivos(...arrayzin: number[]) {
    return arrayzin.filter(elemento => elemento > 0)
}

console.log(aumentoVelocidade(1, 2))
console.log(aumentoVelocidade2(2))
console.log(retornaPositivos(1, 0, -3, -7, 2))