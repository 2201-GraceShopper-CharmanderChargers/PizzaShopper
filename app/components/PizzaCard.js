import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PizzaCard = (props) => {
  const { pizza } = props;
  return (
    // <div className="pizza-card">
    //   <img src={pizza.imageUrl} alt={pizza.name} />
    //   <h3>Name: {pizza.name}</h3>
    //   <h3>Description: {pizza.description || ''}</h3>
    //   <h3>Price: {pizza.price}</h3>
    // </div>
    <div>
      <Card style={{ width: '18rem' }}>
        <a href={`/${pizza.id}`}>
          <Card.Img variant="top" src={pizza.imageUrl} />
        </a>
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>{pizza.description}</Card.Text>
          <Card.Text>{pizza.price}</Card.Text>
          <Button variant="danger">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PizzaCard;
