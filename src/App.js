import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Header from './components/header'
import Footer from './components/footer'
import CatalogPage from './components/catalog-page'
import HomePage from './components/home-page'
import EquipPage from './components/equip-page'
import CartPage from './components/cart-page'
import CheckoutPage from './components/checkout-page'
import SuccessPage from './components/success-page'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/catalog">
          <CatalogPage />
        </Route>
        <Route path="/equip/:id">
          <EquipPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route path="/success">
          <SuccessPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
