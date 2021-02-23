import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBarComponent from './components/navbar/index';
import BannerComponent from './components/banner/index';
import FooterComponent from './components/footer/index';
import Cart from './components/CartWidget/Cart/index';
import logo from './logo.jpg';
import ItemListContainer from './container/ItemListContainer/index';
import GetItems from './container/ItemDetailContainer/index';
import Home from './index';
import { GlobalContext } from './components/CartWidget/Cart/context/GlobalContext';
import {CartContext} from './components/CartWidget/Cart/context/CartContext';


//router ./product/:id

const App = () => {

  return (
    <>
      <CartContext.Provider value={[]}>
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
                </Switch>
                <Switch>
                  <Route path="/servicios">
                    <ItemListContainer greeting={"Nuestros Servicios"}/>
                  </Route>
                  <Route path='/item/:id' component = {ItemDetailContainer}>
                  </Route>

                  <Route path="/servicios/:serviciosId" component={ItemListContainer}>

                  </Route>

              </Switch>
          </BrowserRouter>
          
        </header>
        
        <footer>
          <FooterComponent />
        </footer>

      </CartContext.Provider>
    </>
  );
}

export default App;


