
import './App.css';
import Checkout from './Checkout';
import Home from './Home';
import Header from './Header';
import Login from './Login';
import Payment from './Payment';
import {  BrowserRouter,Routes,Route} from "react-router-dom"
import React,{ useEffect } from 'react'
import {auth} from './firebase'
import { useStateValue } from './StateProvider';

function App() {

  const[{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS>>>>>', authUser)

      if(authUser){
        dispatch({
          type: 'SET_USER',
          USER: authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          USER: null
        })
      }
    })
  }, [])
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>           
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/payment" element={<Payment/>}/>

        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
