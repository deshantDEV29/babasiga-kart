
import './App.css';
import Checkout from './Checkout';
import Home from './Home';
import Header from './Header';
import {  BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>           
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
