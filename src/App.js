import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import HeroSection from './components/hero-section'
import Header from './components/header'
import Footer from './components/footer'
import ProductsList from './components/products-list'
import FilterTile from './components/filter-tile'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HeroSection />
          <ProductsList header = 'LATEST PRODUCTS' />
        </Route>
        <Route path="/catalog">
          <FilterTile />
          <ProductsList />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
