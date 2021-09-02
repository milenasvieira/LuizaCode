class BombaCombustivel {
    constructor(valorGasolina, capacidade) {
        this.valorGasolina = valorGasolina
        this.capacidade = capacidade
        this.qtdeGasolina = capacidade
    }

    encherBomba() {
        if(this.qtdeGasolina == this.capacidade) {
            console.log('A bomba já está cheia')
        } else {
            this.qtdeGasolina = this.capacidade
            console.log('Enchendo a bomba...3...2...1!')
        }

    }

    abastecerCarro(litros) {
        if (this.qtdeGasolina >= litros) {
            this.qtdeGasolina -= litros
            console.log(`Abastecido com sucesso, valor a ser pago: ${litros * this.valorGasolina}`)
        } else {
            console.log(`Não temos essa quantidade de gasolina disponível ${this.qtdeGasolina} litros`)
        }
    }

    ajustarValor(novoValor) {
        this.valorGasolina = novoValor;
        if (novoValor > 0 && typeof(novoValor) == 'number') {
            console.log(`O novo valor da gasolina é ${novoValor}`)
        } else {
            console.log(`Valor ${novoValor} não permitido.`)
        }
    }

    consultarQtde() {

        
    }
}

const bomba1 = new BombaCombustivel(10,50)


bomba1.abastecerCarro(20)
bomba1.ajustarValor(5)
bomba1.abastecerCarro(20)
bomba1.encherBomba()
bomba1.abastecerCarro(20)