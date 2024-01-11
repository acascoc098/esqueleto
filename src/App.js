//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Datos from './Datos';

function App() {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/

  return(
    <div>
      <Header/>
      <h1>Mi primera aplicación en React</h1>
      <Datos/>
      <Footer/>
    </div>
  )
}

export default App;
