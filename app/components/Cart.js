import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.loading = true;
    this.state = {
      cart: this.props.cart,
    };
  }

  componentDidMount() {
    this.loading = false;
    this.setState({
      cart: this.props.cart,
    });
  }

  render() {
    return this.loading ? (
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" />
    ) : (
      <div className="cart">
        <h1>Cart</h1>
        <table id="cart-items">
          <tbody>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {this.props.cart.map((pizza) => {
              return (
                <tr key={pizza.id}>
                  <td>{pizza.name}</td>
                  <td>{pizza.quantity}</td>
                  <td>{pizza.quantity * pizza.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div id="subtotal">
          <p>
            Subtotal:{' '}
            {this.props.cart.reduce((prev, pizza) => {
              return prev + pizza.quantity * pizza.price;
            }, 0)}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Cart);
