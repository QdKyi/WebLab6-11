import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Header from './components/header'
import Footer from './components/footer'
import CatalogPage from './components/catalog-page'
import HomePage from './components/home-page'
import EquipPage from './components/equip-page'

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
          <EquipPage equipList={equip} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

const equip = [
  {
      header: 'Used *Other Brand 15 WAY OUUL STAND BAG Golf / Stand Bags',
      id: 1,
      price: 123,
      condition: 'Used',
      type: 'Backpack',
      text: ' | Durham, NC',
      img: 'https://playitagainsports.imgix.net/images/11614-S000126443-1?auto=compress,format&amp;fit=clip&amp;w=350'
  },
  {
      header: 'Used *Other Brand 15 WAY OUUL STAND BAG Golf / Stand Bags',
      id: 2,
      price: 123,
      condition: 'New',
      type: 'Backpack',
      text: ' | Durham, NC',
      img: 'https://playitagainsports.imgix.net/images/11614-S000126443-1?auto=compress,format&amp;fit=clip&amp;w=350'
  },
  {
      header: 'Used *Other Brand 15 WAY OUUL STAND BAG Golf / Stand Bags',
      id: 3,
      price: 123,
      condition: 'Used',
      type: 'Backpack',
      text: ' | Durham, NC',
      img: 'https://playitagainsports.imgix.net/images/11614-S000126443-1?auto=compress,format&amp;fit=clip&amp;w=350'
  },
  {
      header: 'Used *Other Brand 15 WAY OUUL STAND BAG Golf / Stand Bags',
      id: 4,
      price: 123,
      condition: 'Used',
      type: 'Backpack',
      text: ' | Durham, NC',
      img: 'https://playitagainsports.imgix.net/images/11614-S000126443-1?auto=compress,format&amp;fit=clip&amp;w=350'
  },
  {
      header: 'Used *Other Brand 15 WAY OUUL STAND BAG Golf / Stand Bags',
      id: 5,
      price: 123,
      condition: 'Used',
      type: 'Backpack',
      text: ' | Durham, NC',
      img: 'https://playitagainsports.imgix.net/images/11614-S000126443-1?auto=compress,format&amp;fit=clip&amp;w=350'
  },
  {
      header: 'Used *Other Brand 15 WAY OUUL STAND BAG Golf / Stand Bags',
      id: 6,
      price: 123,
      condition: 'Used',
      type: 'Backpack',
      text: ' | Durham, NC',
      img: 'https://playitagainsports.imgix.net/images/11614-S000126443-1?auto=compress,format&amp;fit=clip&amp;w=350'
  },
  {
      header: 'Used *Other Brand 15 WAY OUUL STAND BAG Golf / Stand Bags',
      id: 7,
      price: 123,
      condition: 'Used',
      type: 'Backpack',
      text: ' | Durham, NC',
      img: 'https://playitagainsports.imgix.net/images/11614-S000126443-1?auto=compress,format&amp;fit=clip&amp;w=350'
  },
  {
      header: 'Used *Other Brand 15 WAY OUUL STAND BAG Golf / Stand Bags',
      id: 8,
      price: 123,
      condition: 'Used',
      type: 'Backpack',
      text: ' | Durham, NC',
      img: 'https://playitagainsports.imgix.net/images/11614-S000126443-1?auto=compress,format&amp;fit=clip&amp;w=350'
  }
]

export default App;
