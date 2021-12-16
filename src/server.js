const express = require("express");
const { render } = require("express/lib/response");
const connect = require("./configs/db");
const port = 7000;
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, 'MY_GLAMM_CLONE')))
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false})); app.use(express.static(path.join(__dirname, '../')));
app.use(express.json());



//console.log(path.join(__dirname,"../index.html"));

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
app.use("/products", productController);





const start = async () => {
  await connect();

  app.listen(port, () => {
    console.log(`listning port ${port} with Srng`);
  });
};

module.exports = start;