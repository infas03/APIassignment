const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(__dirname),
    'data',
    'item.json'
);

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.log(err)
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(id, title, description, price) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductsFromFile(Products => {
            if (this.id) {
                const existingProductIndex = Products.findIndex(
                    prod => prod.id === this.id
                );
                const updatedProducts = [...Products];
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                    console.log(err);
                });
            } else {
                this.id = (new Date()).getTime().toString();
                Products.push(this);
                fs.writeFile(p, JSON.stringify(Products), err => {
                    console.log(err);
                });
            }
        });
    }

    static deleteById(id) {
        getProductsFromFile(Products => {
            const updatedProducts = Products.filter(prod => prod.id !== id);
            fs.writeFile(p, JSON.stringify(updatedProducts), err => {
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    static findById(id, cb) {
        getProductsFromFile(Products => {
            const Product = Products.find(p => p.id === id);
            cb(Product);
        });
    }
};

