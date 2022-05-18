import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container} from 'reactstrap';
import Home from './pages/Home';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar'
import {CartProvider} from './lib/Cart.context';

function App() {
  return (
    <CartProvider>
    <Container>
     <div className="head">
     <h1>AmazeTools</h1>
     <p>Explore Amaxing Tools</p>
     </div>
    <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/category/:id" exact>
            <Category />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
        </Switch>

    </Container>
     </CartProvider>
  );
}

export default App;
