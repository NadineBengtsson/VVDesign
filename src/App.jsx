import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/navbar/index';
import BannerComponent from './components/banner/index';
import Products from './container/index';
import FooterComponent from './components/footer/index';
import logo from './logo.jpg';

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
      
        <NavBarComponent />
      </header>

      <section>
        <BannerComponent />
      </section>
      
      <section>
        <Products greeting={"Nuestros Servicios"}/>
      </section>
      
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}


export default App;


