import React from 'react';
import { connect } from 'react-redux';
import { fetchPizza } from '../redux/singlePizza';
import { addCart } from '../redux/cart';
import Cart from './Cart';

class SinglePizza extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.loading = true;
    this.inCart = false;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'quantity') {
      this.setState({ quantity: Number(event.target.value) });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addCart(this.state);
    this.inCart = true;
    this.setState({
      ...this.props.pizza,
      quantity: 1,
    });
  }

  componentDidMount() {
    this.loading = false;
    this.props.fetchPizza(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pizza !== this.props.pizza) {
      this.setState({
        ...this.props.pizza,
        quantity: 1,
      });
    }
  }

  render() {
    const pizza = this.props.pizza;
    return this.loading ? (
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" />
    ) : !this.inCart ? (
      <form className="single-pizza" onSubmit={this.handleSubmit}>
        <img src={pizza.imageUrl} />
        <h1>{pizza.name}</h1>
        <p>{pizza.description}</p>
        <p>${pizza.price}</p>
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="number"
          name="quantity"
          min="1"
          value={this.state.quantity}
          onChange={this.handleChange}
        />
        <div className="nav-buttons">
          <a href="/">
            <button type="button">Back</button>
          </a>
          <input type="submit" value="Add to Cart" />
        </div>
      </form>
    ) : (
      <Cart />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pizza: state.pizza,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPizza: (id) => dispatch(fetchPizza(id)),
    addCart: (pizza) => dispatch(addCart(pizza)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePizza);
