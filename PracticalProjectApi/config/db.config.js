require("dotenv").config();
module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "",
  DB: "banks",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
