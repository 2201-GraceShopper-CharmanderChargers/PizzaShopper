import { combineReducers } from 'redux';
import pizzasReducer from './pizzas';
import pizzaReducer from './singlePizza';
// import usersReducer from './users';
// import ordersReducer from './orders';

const appReducer = combineReducers({
  pizzas: pizzasReducer,
  pizza: pizzaReducer,
  // users: usersReducer,
  // orders: ordersReducer,
});

export default appReducer;
