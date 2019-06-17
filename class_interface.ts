class Transporte {
    constructor(public velocidade: number){}

    locomover_se() {
        console.log(`Locomovendo-se a ${this.velocidade} km/h.`)
    }
}

class Carro extends Transporte {
    constructor() {
        super(200)
    }
}

class Aviao extends Transporte {
    constructor() {
        super(900)
    }
}

let carro = new Carro()
let aviao = new Aviao

carro.locomover_se()
aviao.locomover_se()

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