class Ecommerce {
    products
    logedUsers

    constructor(products) {
        this.products = products
    }

    addProduct(product){
        this.products.push(product)
    }
}

moduleexports.Ecommerce = Ecommerce