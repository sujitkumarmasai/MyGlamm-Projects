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


// app.get("/srng", async(req,res) => {

//   const data = await products.find().lean().exec();
//   res.send(data);

// })

// const senddata =  () => {
  // return let data =  product.find().lean().exec().then(() => {
  //   export data 
  // })
// }

// let data  = products.find()

// console.log(data);

// async function data(){
//   let data = await products.find().lean().exec()
//   console.log(data);
// } 
// data();
// //console.log(path.join(__dirname,"../index.html"));

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
const productdetailsController = require("./controllers/productdetails.controller");
app.use("/productdetails", productdetailsController);






const start = async () => {
  await connect();

  app.listen(port, () => {
    console.log(`listning port ${port} with Srng`);
  });
};



//module.exports = data;
module.exports = start;