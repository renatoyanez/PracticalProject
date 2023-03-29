const db = require("../models");
const BankModel = db.banks;
const Op = db.Sequelize.Op;

// Create and Save a new Bank
exports.create = (req, res) => {
  // Validate request
  if (!req.body.data) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  // Create a Bank

  const banks = req.body.data.map((bank) => {
    return {
      bankName: bank.bankName,
      description: bank.description,
      age: bank.age,
      url: bank.url,
    };
  });

  // Save Bank in the database
  BankModel.bulkCreate(banks)
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
