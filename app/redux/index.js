import { combineReducers } from 'redux';
import pizzasReducer from './pizzas';
import pizzaReducer from './singlePizza';
import cartReducer from './cart';
// import usersReducer from './users';
// import ordersReducer from './orders';

const appReducer = combineReducers({
  pizzas: pizzasReducer,
  pizza: pizzaReducer,
  cart: cartReducer,
  // users: usersReducer,
  // orders: ordersReducer,
});

export default appReducer;
