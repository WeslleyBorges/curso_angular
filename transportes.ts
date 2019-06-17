class Transporte {
    constructor(public velocidade: number){}

    locomover_se() {
        console.log(`Carro locomovendo-se a ${this.velocidade} km/h.`)
    }
}

interface Metralhadora {

  poderDestrutivo: number
}

class Aviao extends Transporte implements Metralhadora {
    constructor() {
        super(900)
    }

    poderDestrutivo = 9000
}

class Carro extends Transporte {
    constructor() {
        super(200)
    }
}

export {Carro, Aviao, Metralhadora}
