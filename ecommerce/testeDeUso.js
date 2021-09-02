import Product from './product';
import Ecommerce from './ecommerce';

const contosDoAmanha = new Product ({
    name: 'Contos do Amanhã',
    value: 4,
    author: 'Dracula',
    categories: [
        'acao',
        'suspense'
    ],
    description: 'insira a descrição do livro aqui',

});

console.log(contosDoAmanha)

const dracula = new Product ({
    name: 'Dracula',
    value: 9,
    author: 'Bram Stoker',
    categories: [
        'terror',
        'suspense'
    ],
    description: 'insira a descrição do livro aqui',

});

console.log(dracula)

const gamaStore = new Ecommerce([contosDoAmanha, dracula]);

gamaStore.addProduct(new Product({
    name: 'Harry Potter',
    value: 8,
    author: 'J. K. Rowling',
    categories: [
        'fantasia',
        'infanto-juvenil'
    ],
    description: 'insira a descrição do livro aqui'
}));

console.log(gamaStore)

const Ecommerce = require("./ecommerce");

//cria um ecommerce
const ecommerce = new Ecommerce();

//cria um usuario do ecommerce
ecommerce.createUser({
    name: "Milena Vieira",
    email: "milenasvieira63@gmail.com",
    password: "123456"
})

//logar um usuário no ecommerce

//adiciona livros ao ecommerce

//adiciona livros ao carrinho de um usuário logado

//fazer checkout do carrinho do usuário