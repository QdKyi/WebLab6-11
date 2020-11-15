import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeroSection from './components/hero-section'
import Header from './components/header'
import Footer from './components/footer'
import ProductsList from './components/products-list'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <HeroSection img='https://playitagainsports.imgix.net/buyerweb/assets/_pias/_svg/how-we-buy/1-bring-it-in.svg' header='Very important text!'
        text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque eaque, quasi quo, suscipit quibusdam asperiores veniam accusantium assumenda deserunt cumque cupiditate at dicta, vitae odit alias exercitationem necessitatibus tempora.' />
    <ProductsList />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
