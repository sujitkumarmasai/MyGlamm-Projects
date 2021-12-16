const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const connect = require("../configs/db")

router.post("/", async (req, res) => {
  try {

    
        res.send("=Hey Srng=")
    
  }
  catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;