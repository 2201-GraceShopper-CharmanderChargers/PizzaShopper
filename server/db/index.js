// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database');
const Pizza = require('./models/pizza');
const User = require('./models/user');
const Order = require('./models/order');

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)

User.hasMany(Order);
Order.belongsTo(User);

Pizza.belongsToMany(Order, { through: 'pizzaOrders' });
Order.belongsToMany(Pizza, { through: 'pizzaOrders' });

module.exports = {
  // Include your models in this exports object as well!
  db,
  Pizza,
  User,
  Order,
};
