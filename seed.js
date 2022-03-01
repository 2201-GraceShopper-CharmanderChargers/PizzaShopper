const { green, red } = require('chalk');
const { db, Pizza, User, Order } = require('./server/db');

const fakePizzas = [
  {
    name: 'margharita',
    description: 'tomato and mozzarella!',
    price: 7.99,
    imageUrl:
      'https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza-500x500.jpg',
  },
  {
    name: 'capricciosa',
    description: 'ham, cheese, and mushrooms',
    price: 12.99,
    imageUrl:
      'https://cdn.tasteatlas.com/images/dishes/6b28b438a3b64a7e9fca9081c89f07ff.jpg',
  },
  {
    name: 'three cheese',
    description: 'uh...chese? This is per slice by the way',
    price: 17.99,
    imageUrl:
      'https://veenaazmanov.com/wp-content/uploads/2020/06/3-cheese-pizza-with-no-knead-pizza-dough3.jpg',
  },
];

const fakeUsers = [
  {
    firstName: 'David',
    lastName: 'Dunham',
    password: '12345',
    email: 'daviddfh@gmail.com',
  },
  {
    firstName: 'Sam',
    lastName: 'Smith',
    password: 'password',
    email: 'daviddfh@gmail.com',
  },
  {
    firstName: 'Joe',
    lastName: 'Blow',
    password: 'password',
    email: 'daviddfh@gmail.com',
  },
];

const fakeOrders = [
  { address: '123 Deerborn Lane' },
  { address: '234 Glen Oaks Court' },
  { address: '6123 Deerpath Road' },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(fakePizzas.map((pizza) => Pizza.create(pizza)));
    await Promise.all(fakeOrders.map((order) => Order.create(order)));
    await Promise.all(fakeUsers.map((user) => User.create(user)));
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
