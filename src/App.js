/* import logo from './logo.svg'; */
import './App.css';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import CardExample1 from './components/scheme/Card';
import CarouselExample1 from './components/scheme/Carousel';


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
      <CardExample1/>
      <CarouselExample1/>
      <Footer/>
    </div>
  );
}

export default App;
