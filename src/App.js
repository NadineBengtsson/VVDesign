import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from "react-icons/md";
import NavBarComponent from './components/NavBar.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link" 
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Diseños Veronica Valdevilt
        </a>
      <NavBarComponent></NavBarComponent>
      </header>
    </div>
  );
}


export default App;
