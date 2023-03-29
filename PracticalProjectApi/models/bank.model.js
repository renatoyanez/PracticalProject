module.exports = (sequelize, Sequelize) => {
  const Bank = sequelize.define("bank", {
    bankName: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    },
    url: {
      type: Sequelize.STRING,
    },
  });

  return Bank;
};
