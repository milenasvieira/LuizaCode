class Product {
    name = '';
    value = 0;
    author = '';
    categories = [];
    description = '';
    soldQuantity = 0;

    constructor(product) {
        this.name = product.name
        this.value = product.value
        this.author = product.author
        this.categories = product.categories
        this.description = product.description
        this.soldQuantity = product.soldQuantity || 0
    }
}

module.exports = Product



