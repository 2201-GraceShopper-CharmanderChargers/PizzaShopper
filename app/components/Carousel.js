import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselSlide = (props) => {
  const { pizzas } = props;
  console.log(pizzas);
  return (
    <div>
      <Carousel>
        {pizzas.map((pizza) => {
          return (
            <Carousel.Item interval={5000} key={pizza.id}>
              <img
                className="carouselslide"
                width={700}
                height={700}
                src={pizza.imageUrl}
              />
              <Carousel.Caption>
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};


export default CarouselSlide;
