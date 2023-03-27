let products = [];

const fs = require ('fs');

class ProductManager {
    constructor(){
        this.products = products
        this.path = './data.json'
    }

    archivoJson = async () => {
        try {
            const toJson = JSON.stringify(this.products, 'null', 2)
            await fs.promises.writeFile(this.path, toJson, 'utf-8')
        }
        catch (err) { return console.log(err) }
    }

    addProducts = (title, description, price, thumbnail, code, stock) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        if(this.products.length === 0){
            product.id = 1
        } else {
            product.id = this.products[this.products.length - 1].id + 1
        }

        if (Object.values(product).every(value => value)){
            this.products.push(product)
            this.archivoJson()
        } else {
            console.log('Todos los campos son obligatorios')
        }
    }

    getProducts = () => {
        return this.products
    }

    getProductsById = (id) => {
        const obj = this.products.find(product => product.id === id)
        return obj ? obj : console.log('No products found')
    }

    updateProduct = async () => {
        try {
            let readFile = await fs.promises.readFile(this.path, 'utf-8')
            return console.log(readFile)
        }
        catch (err) { return console.log(err) }
    }

    deleteProduct = async () => {
        try { 
            let readFile = await fs.promises.readFile(this.path, 'utf-8')
            return console.log(readFile)
        }
        catch (err) { return console.log(err) }
    }
}


const product = new ProductManager()

product.addProducts(
    'Libro',
    'Desarrollo personal',
    5400,
    'thumbnail',
    001,
    6
);

product.addProducts(
    'Libro',
    'Ficcion',
    3800,
    'thumbnail',
    002,
    6
);

product.addProducts(
    'Libro',
    'Finanzas',
    6500,
    'thumbnail',
    003,
    6
);


console.log(product.getProducts())

// console.log(product.getProductsById(1))







