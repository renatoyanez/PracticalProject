module.exports = (app) => {
  const banks = require("../controllers/bank.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", banks.create);

  // Retrieve all banks
  router.get("/", banks.findAll);

  app.use("/api/banks", router);
};
