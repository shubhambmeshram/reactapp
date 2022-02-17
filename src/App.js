import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar';
import Home from '../src/component/Home';
import About from '../src/component/About';
import { Routes , Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Navbar/>
      
      <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='About' element={<About/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
