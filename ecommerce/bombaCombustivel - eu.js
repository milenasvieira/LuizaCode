class BombaDeCombustivel {
    capacidadeDaBomba = 100;
    precoPorLitro = 4;
    qtdeCombustivel = 0;

    constructor(bomba){
        this.capacidadeDaBomba = bomba.capacidadeDaBomba;
        this.precoPorLitro = bomba.precoPorLitro;
        this.qtdeCombustivel = bomba.qtdeCombustivel;
    }

    encherBomba() {
        const qtoDeveEncher = this.capacidadeDaBomba - this.qtdeCombustivel;
        return qtoDeveEncher;
    }

    consultaQtdeCombustivel() {
        return this.qtdeCombustivel;
    }

    abastecerPorQtdeLitros() { 
        const qtdeDeLitrosDesejada; //usuário informa a quantidade de litros para abastecer
        if (qtdeDeLitrosDesejada <= this.qtdeCombustivel) {
            const qtdeCombustivelSobrou = this.qtdeCombustivel - qtdeDeLitrosDesejada;
            return qtdeDeLitrosDesejada * this.precoPorLitro;  //retorna valor a ser pago
        } else {
           return console.log(`Essa bomba só tem ${qtdeCombustivelSobrou} litro(s) disponível(is).`)
        }
    }

    alterarPrecoPorLitro(precoPorLitro) {
        const novoPrecoPorLitro; //usuário informa o novo valor para o litro
        if (novoPrecoPorLitro >= 1) {
            return this.precoPorLitro = novoPrecoPorLitro;
        } else {
            return console.log ("Por favor, informe um valor maior que 1.")
        }
    }

    //tratar quando não houver combustível suficiente na bomba para um determinado abastecimento
    //não aceitar preço 0 ou negativo
}