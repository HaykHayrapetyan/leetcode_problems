class Product {
    #products;
    constructor(){
        this.#products = [
            { id: 1, name: 'Laptop', price: 1000 },
            { id: 2, name: 'Mouse', price: 20 },
            { id: 3, name: 'Keyboard', price: 50 }
        ];
    }

    listProducts(){
        return this.#products;
    }

    addProduct(name, price) {
        let id = this.#products.length + 1;
        this.#products.push({id, name, price});
    }

    removeProduct(id) {
        const index = this.#products.findIndex(p => p.id === id);
        if (index !== -1) {
            this.#products.splice(index, 1);
        }
    }

    updateProduct(id, name, price) {
        const product = this.#products.find(p => p.id === id);
        if (product) {
            product.name = name;
            product.price = price;
        }
    }
}

const product = new Product();
const product2 = new Product();
console.log(product.listProducts())

product.addProduct('Monitor', 200);
console.log('pr1', product.listProducts())
console.log(product2.listProducts())

product.removeProduct(2);
console.log(product.listProducts())

product.updateProduct(1, 'Gaming Laptop', 1500);
console.log(product.listProducts())

