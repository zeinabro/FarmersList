class Cart {
    constructor(){
        this.products=[];
        this.total=0;
    };

    addProduct(product){
        this.products.push(product)
        this.total += product.price;
    };

    removeProduct(i){
        this.total -= this.products[i].price;
        this.products.splice(i,1);
    };

    getTotal(){
        return this.total
    }

    clear(){
        this.products = [];
        this.price = 0;
    }
}

module.exports = Cart;