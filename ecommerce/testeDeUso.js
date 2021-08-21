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