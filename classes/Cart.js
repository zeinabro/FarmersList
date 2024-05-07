class Cart {
    constructor(){
        this.products=[];
        this.total=0;
    };

    addProduct(product,quantity){
        if (product.quantity<=quantity){
            for (let i=0;i<quantity;i++){
                this.products.push(product)
                this.total += product.price;
                product.quantity--
            }
        } else {
            throw(`I'm sorry there are only ${product.quantity} of this product left`)
        }
        
        if (product.quantity==0){
            product.inStock = false;
        }
        return product;
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
    
    removeByItemName(itemName){
        const item = this.products.find(item => item.name==itemName);
        const idx = this.products.indexOf(item);
        this.products.splice(i,1);
    }
}

module.exports = Cart;