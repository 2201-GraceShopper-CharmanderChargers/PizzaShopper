import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllPizzas from './AllPizzas';
import 'bootstrap/dist/css/bootstrap.min.css';

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>Welcome!</nav>
        <main>
          <h1>Your pizzas are awaiting assignments!</h1>
          <Switch>
            <Route exact path="/" component={AllPizzas} />
          </Switch>
          <p>This seems like a nice place to get started with some Routes!</p>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
