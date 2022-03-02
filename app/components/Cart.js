import React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { updateCart } from '../redux/cart';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.loading = true;
    this.state = {
      cart: this.props.cart,
    };
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  changeQuantity(event) {
    const pizzaId = Number(event.target.name);
    const targetPizza = this.props.cart.filter((pizza) => {
      return pizza.id === pizzaId;
    })[0];
    targetPizza.quantity = event.target.value;
    this.props.updateCart(targetPizza);
  }

  componentDidMount() {
    this.loading = false;
    this.setState({
      cart: this.props.cart,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cart !== this.props.cart) {
      this.setState({ cart: this.props.cart });
    }
  }

  render() {
    return this.loading ? (
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" />
    ) : (
      <div className="cart">
        <h1>Cart</h1>
        <Table striped border hover>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((pizza) => {
              return (
                <tr key={pizza.id}>
                  <td>{pizza.name}</td>
                  <td>
                    <input
                      type="number"
                      name={pizza.id}
                      value={pizza.quantity}
                      min="1"
                      onChange={this.changeQuantity}
                    />
                  </td>
                  <td>{pizza.quantity * pizza.price}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div id="subtotal">
          <p>Subtotal: </p>
          <p>
            $
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: (pizza) => dispatch(updateCart(pizza)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
