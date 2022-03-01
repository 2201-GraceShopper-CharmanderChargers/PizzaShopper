const Sequelize = require('sequelize');
const db = require('../database');

const Order = db.define('order', {
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Order;
