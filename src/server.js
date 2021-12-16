const express = require("express");
const connect = require("./configs/db");
const port = 7000;
const app = express();

app.use(express.json());


const start = async () => {
  await connect();

  app.listen(port, () => {
    console.log(`listning port ${port} with Srng`);
  });
};

module.exports = start;