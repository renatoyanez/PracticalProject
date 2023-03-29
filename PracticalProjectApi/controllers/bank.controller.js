const db = require("../models");
const BankModel = db.Bank;
const Op = db.Sequelize.Op;

// Create and Save a new Bank
exports.create = (req, res) => {
  // Validate request
  if (!req.body.bankName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Bank
  const bank = {
    bankName: req.body.bankName,
    description: req.body.description,
    age: req.body.age,
    url: req.body.url,
  };

  // Save Bank in the database
  BankModel.create(bank)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Bank.",
      });
    });
};

// Retrieve all Banks from the database.
exports.findAll = (req, res) => {
  const bankName = req.query.bankName;
  const condition = bankName
    ? { bankName: { [Op.iLike]: `%${bankName}%` } }
    : null;

  BankModel.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving banks.",
      });
    });
};

// Find a single Bank with an id
// exports.findOne = (req, res) => {};
