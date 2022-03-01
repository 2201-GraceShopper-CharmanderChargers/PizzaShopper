const Sequelize = require('sequelize');
const db = require('../database');

const Pizza = db.define('pizza', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  description: {
    type: Sequelize.TEXT,
  },

  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0,
    },
  },

  ImageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://visittallahassee.com/wp-content/uploads/2020/06/bf5b495d-1e36-47f6-9833-333f42d91cb7.jpg',
  },
});

module.exports = Pizza;
