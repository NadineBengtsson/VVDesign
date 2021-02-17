import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBarComponent from './components/navbar/index';
import BannerComponent from './components/banner/index';
import FooterComponent from './components/footer/index';
import logo from './logo.jpg';
import ItemListContainer from './container/ItemListContainer/index';
import GetItems from './container/ItemDetailContainer/index';
import Home from './index';


//router ./product/:id

const App = () => {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link" 
          href="https://www.instagram.com/veronicavaldeviltdesign/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Diseños Veronica Valdevilt
        </a>
        <BrowserRouter>
          <NavBarComponent/>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/servicios/:id">
                <ItemListContainer greeting={"Nuestros Servicios"}/>
              </Route>
            </Switch>
        </BrowserRouter>
         
      </header>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}

export default App;


