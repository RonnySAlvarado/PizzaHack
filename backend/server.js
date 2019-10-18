const express = require("express");

const server = express();

const cors = require("cors");

const pizzapi = require("pizzapi");

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  let myStore = new pizzapi.Store({ ID: 7767 });

  myStore.getMenu(function(storeData) {
    console.log(storeData.result.Products.F_PARMT);
  });
  res.send({ message: "It's working! IT'S WORKING!!!" });
});

server.post("/", (req, res) => {
  const { address } = req.body;
  pizzapi.Util.findNearbyStores(address, "Delivery", function(storeData) {
    res.status(200).json({ storeData });
  });
});

module.exports = server;
