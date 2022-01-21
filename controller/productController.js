const Product = require('../model/productModal.js');

// exports.postEditTutorial = (req, res, next) => {
//     const id = req.body.id;
//     const title = req.body.title;
//     const published = req.body.published;
//     const description = req.body.description;
//     const updatedTutorial = new Tutorial(
//         id,
//         title,
//         description,
//         published
//     );
//     updatedTutorial.save();
//     res.status(200).json({ message: id ? 'Tutorial Updated Successfully' : 'Tutorial Added Successfully' })
// };

exports.testproduct = (req, res, next) => {
    return res.status(200).json({
        message: "Hello world testing!",
    });
};

exports.postProduct = (req, res, next) => {
     
    updatedProduct = new Product(
        id = req.body.id,
        title = req.body.title,
        price = req.body.price,
        description = req.body.description
    );
    updatedProduct.save();
    res.status(200).json({ message: id ? 'Product Updated Successfully' : 'Product Added Successfully' })
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(Products => {
        res.json(Products)
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.id;
    Product.findById(prodId, Product => {
        res.json(Product)
    });
};

exports.DeleteProduct = (req, res, next) => {
    const prodId = req.params.id;
    Product.deleteById(prodId);
    res.status(200).json({ message: "Product deleted successfully" })
};