/* import logo from './logo.svg'; */
import './App.css';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';




/*Original Code
function App() {
  return (
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
  );
}
*/

function App(){
  return(
    <div className='App'>
      <Header/>
      <Nav/>
    </div>
  );
}

export default App;
