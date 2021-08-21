class CarrinhoDeCompra {
	itens = []
	valorTotalDaCompra = 0

	adicionandoItem(item, valor) {
		this.itens.push(item)
		this.valorTotalDaCompra = this.valorTotalDaCompra + valor
}
	removendoItem(item, ) {
		const index = this.itens.indexOf(item)
		this.itens.splice(index, 1);
}
	darDesconto() {
		console.log('adicionando desconto');
}
}

class Supermercado {
	pessoasDentro = []

	abrirPortaPara(pessoa) {
		this.pessoasDentro.push(pessoa)
	}

}

const carrinhoDaMagalu = new CarrinhoDeCompra(); //instancia a classe

carrinhoDaMagalu.adicionandoItem('caixa de leite', 5);
carrinhoDaMagalu.adicionandoItem('bolacha', 2);
carrinhoDaMagalu.adicionandoItem('nescau', 7);

console.log(carrinhoDaMagalu.itens)
console.log(carrinhoDaMagalu.valorTotalDaCompra)

carrinhoDaMagalu.removendoItem('bolacha');

console.log(carrinhoDaMagalu.itens)
console.log(carrinhoDaMagalu.valorTotalDaCompra)

const carrinhoDoJoao = new CarrinhoDeCompra();

carrinhoDoJoao.adicionandoItem('desinfetante', 5)
carrinhoDoJoao.adicionandoItem('pano de chão', 2)

console.log(carrinhoDoJoao.itens)
console.log(carrinhoDoJoao.valorTotalDaCompra)
