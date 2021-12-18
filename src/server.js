const express = require("express");
const { render } = require("express/lib/response");
const connect = require("./configs/db");
const port = 7000;
const app = express();

const path = require("path");


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false})); app.use(express.static(path.join(__dirname, '../')));
app.use(express.json());

const products = require("./models/products.model");



app.get("/", async (req, res) => {
  try 
  {
    res.sendFile(path.join(__dirname,"../index.html"));
    //return res.send("srng index.html");
  }
  catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});



const productController = require("./controllers/products.controller");
const productContrl = require("./controllers/productdetail.control");


app.use("/products", productController);
app.use("/productsdetail", productContrl);







const start = async () => {
  await connect();

  app.listen(port, () => {
    console.log(`listning port ${port} with Srng`);
  });
};



//module.exports = data;
module.exports = start;