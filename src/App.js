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
import LoginPage from './components/login-page'
import RegisterPage from './components/register-page'
import ProtectedRoute from "./components/protected-route";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <ProtectedRoute
            component={<HomePage />}
            path={"/"}
            exact
            // redirect={<Heading />}
          />
        <ProtectedRoute component={<CatalogPage />} path={"/catalog"} />
        <ProtectedRoute component={<EquipPage />} path={"/equip/:id"} />
        <ProtectedRoute component={<CartPage />} path={"/cart"} />
        <ProtectedRoute component={<CheckoutPage />} path={"/checkout"} />
        <ProtectedRoute component={<SuccessPage />} path={"/success"} />
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
