const express = require("express");
const router  = express.Router();
const meetups = require('./meetups')
module.exports = () =>{
  router.get("/:lat/:lon", (req, res) => {
    res.send('test')
  })

  return router;
}