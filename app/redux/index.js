import { combineReducers } from 'redux';
import pizzasReducer from './pizzas';
// import usersReducer from './users';
// import ordersReducer from './orders';

const appReducer = combineReducers({
  pizzas: pizzasReducer,
  // users: usersReducer,
  // orders: ordersReducer,
});

export default appReducer;
