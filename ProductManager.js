let products = []

class ProductManager {
    constructor(){
        this.products = products
    }


    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        if (this.products.length === 0){
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        }

        const productCode = this.products.find(prod => prod.code === product.code)
        if (productCode) {
            console.log('Error, el producto ya ha sido ingresado');
        } else {
            if (Object.values(product).every(value => value)){
                this.products.push(product);
            } else {
                console.log('Error, falta completar todos los campos')
            }
        }
    }

    getProducts = () => {
        if (this.products.length === 0) {
            return console.log('No hay productos') 
        } else {
            return this.products;
        }
    }

    getProductById = (id) => {
        const productId = this.products.find(product => product.id === id);
        console.log('Producto encontrado', productId);
        (!productId) ? console.log('Producto no encontrado') : console.log('Producto existente')
    }

}

const product = new ProductManager();

product.addProduct(
    'Producto 1',
    'Lorem ipsum',
    200,
    'Link',
    001,
    30
);

product.addProduct(
    'Producto 2',
    'Lorem ipsum',
    650,
    'Sin imagen',
    002,
    15
);

console.log(product.getProducts());

// console.log(product.getProductById(2));
