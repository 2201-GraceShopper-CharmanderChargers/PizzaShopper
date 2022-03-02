# Code Review for 03-02-2022

## Entities

### Pizzas

- Schema needs the price added
- price should probably be Sequelize.DECIMAL(10, 2)

### Orders

- Orders need a LineItem or OrderItem to represent what products you have in the cart. It can't just be the pizza, as we need to record more information, like the price as the time of checkout and the quantity bought.
- A "Cart" is just an order that isn't complete.  So we may need a "state" field on the Order table to track the state of the order (new, complete, shipped, etc). An ENUM field might be useful for this.
- You might want to keep the address info on the User model and just use it for shipping the order.
- Address should be a bunch of fields, Address1, Address2, City, State, Postcode etc.
- In more advanced e-commerce sites you might have an entire Addresses table (example amazon has a bunch of addresses you can store and ship to different ones) But this is not a Tier 1 feature.

### OrderItem/LineItem

- This would contain fields such as productId, orderId, salePrice and quantity
- Many to one relationship with order and product.

## API Routes

- Looks good so far, you might consider commenting your routes with what the URL is.
- You might consider building up a set of API docs which show all the api routes you'll need, it could give you a good plan as you move forward building the app.
- Think about returning the correct HTTP errors for failures instead of just passing the database error to next()

## Components

- Looks good so far. I would attempt to use React Hooks for a few components in this app. You can mix and match and use a combination of class based and functional hooks based components. I believe once you start doing hooks you won't want to go back....
- I like that you have a separate PizzaCard component instead of having that live just inside of AllPizzas
- Does Nav.Link from react-bootstrap integrate with React Router? Just wanting to make sure those aren't causing page reloads.
- the `main` branch has a syntax error in Routes.js, are you reviewing PRs and making sure the PR branches run correctly before merging to main?

  ```text
  ERROR in ./app/components/Routes.js
    Module build failed (from ./node_modules/babel-loader/lib/index.js):
    SyntaxError: Expected corresponding JSX closing tag for <Nav> (31:10)

    29 |               <Nav.Link className = "navLink" href="/">Cart</Nav.Link>
    30 |             </Nav>
  > 31 |           </Container>
       |           ^
    32 |         </Navbar>
    33 |         <main>
    34 |           {/* <h1>Pizzas For Sale</h1> */}
  ```

- You might look into documenting the shape of your redux store
