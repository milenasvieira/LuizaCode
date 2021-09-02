class User {
    name = '';
    email = '';
    password = '';
    selectedItems = [];
    shoppingHistory = [];

    constructor(user) {
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.selectedItems = user.selectedItems;
        this.shoppingHistory = user.selectedItems;
    }

    addEbook(product) {
        this.selectedItems.push(product);
    }

    removeEbook(product) {
        const index = this.selectedItems.indexOf(product);
        this.selectedItems.splice(index, 1);
    }

    payEbooks(selectedItems) {
        const totalValue = 0;
        for (let item = 0; item < selectedItems.length; item++) {
            totalValue += selectedItems[item].product.value
        }
    }
};

//module.exports = User;
export default User; //mais comum de ser usado


//pagar os itens escolhidos
//editar o proprio cadastro
//ver o historico de suas compras
//logar no sistema
//deslogar do sistema
