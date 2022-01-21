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

app.post("/postproduct",productController.postProduct);
app.get("/allproducts", productController.getProducts);
app.get("/product/:id", productController.getProduct);
app.delete("/product/:id", productController.DeleteProduct);


app.get("/hitest", productController.testproduct);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
