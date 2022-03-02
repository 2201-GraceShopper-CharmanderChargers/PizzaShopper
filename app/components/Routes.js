import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AllPizzas from './AllPizzas';
import SinglePizza from './SinglePizza';
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Routes = () => {
  return (
    <Router>
      <div>
        {/* <nav>That's Amore!</nav> */}
        <Navbar bg="success" variant="light">
          <Container>
            <Navbar.Brand href="/">Menu</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/login">Log In</Nav.Link>
              <Nav.Link href="/signup">Sign up</Nav.Link>
              <Nav.Link href="/">Cart</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <main>
          <h1>Pizzas For Sale</h1>
          <Switch>
            <Route exact path="/" component={AllPizzas} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/:id" component={SinglePizza} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
