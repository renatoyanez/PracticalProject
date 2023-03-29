// const Sequelize = require('sequelize');
// const db = new Sequelize('postgres://localhost:5432/banks',
//     {
//         logging: false,
//     }
// );

// module.exports = db

const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.banks = require("./bank.model")(sequelize, Sequelize);

module.exports = db;
