const express = require('express');
const bodyParser = require('body-parser');
var logger = require("./logger");

const router = express.Router();

router.get("/", function(req, res) {
  res.send("Nothing to see here");
});

router.post("/webhook", bodyParser.raw({type: 'application/json'}), function(req, res) {
  logger.log("info", "%j", req.body);
  res.send("OK");
});

module.exports = router;
