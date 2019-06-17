import {Carro, Aviao} from './transportes'

let carro = new Carro()

carro.locomover_se()

let aviao = new Aviao

let ameacador = (aviao: Aviao): boolean => {
  // HACK: Lembrei dele!
  return !!aviao.poderDestrutivo
}

console.log('O avião instanciado é ameaçador? ' + ameacador(aviao))
