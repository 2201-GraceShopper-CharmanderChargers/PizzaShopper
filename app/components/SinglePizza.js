import React from 'react';
import { fetchPizza } from '../redux/singlePizza';
import { connect } from 'react-redux';

class SinglePizza extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.loading = true;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  componentDidMount() {
    this.loading = false;
    this.props.fetchPizza(this.props.match.params.id);
  }

  render() {
    const pizza = this.props.pizza;
    return this.loading ? (
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" />
    ) : (
      <form className="single-pizza">
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePizza);
