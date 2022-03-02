const ADD_CART = 'ADD_CART';

export const addCart = (pizza) => {
  return {
    type: ADD_CART,
    pizza,
  };
};

/* When we add a pizza to the cart from the single pizza view, we added a quantity property. We want the cart to group pizzas of the same type. If the pizza type is already in the cart, just update the quantity.
Ex: [{id: 1, name: margarita, ..., quantity: 1}]
*/
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_CART: {
      const prevPizzas = state.filter((pizza) => pizza.id === action.pizza.id);
      if (prevPizzas.length > 0) {
        const newPizza = prevPizzas[0];
        newPizza.quantity += action.pizza.quantity;
        return state.map((pizza) => {
          if (pizza.id === newPizza.id) {
            return newPizza;
          } else {
            return pizza;
          }
        });
      } else {
        return [...state, action.pizza];
      }
    }
    default:
      return state;
  }
}