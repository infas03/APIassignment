const serverless = require("serverless-http");
const express = require("express");
const productController = require('./controller/productController.js');


const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello Im Infas!",
  });
});

//my CRUD Functions
app.post("/postproduct",productController.postProduct); //add product

app.put("/postproduct",productController.postProduct); //update product

app.get("/allproducts", productController.getProducts);//view all product

app.get("/product/:id", productController.getProduct);//view one product

app.delete("/product/:id", productController.DeleteProduct);//delete product


app.get("/hitest", productController.testproduct);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
