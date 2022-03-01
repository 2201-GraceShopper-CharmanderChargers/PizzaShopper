import React from 'react';

const PizzaCard = (props) => {
  const { pizza } = props;
  return (
    <div className="pizza-card">
      <img src={pizza.imageUrl} alt={pizza.name} />
      <h3>Name: {pizza.name}</h3>
      <h3>Description: {pizza.description || ''}</h3>
      <h3>Price: {pizza.price}</h3>
    </div>
  );
};

export default PizzaCard;
