import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import logo from './assets/logo.PNG'
import {useStateValue} from './StateProvider'
import {auth} from './firebase'


function Header() {

    const[{basket}] = useStateValue();

    var userEmail = 'Guest';
    if(auth.currentUser){
        userEmail = auth.currentUser.email
    }

    const handleAuthentication = () =>{
        if(auth.currentUser){
            auth.signOut();
            
        }
    }

    return (
        <div className = 'header'>
          <Link to='/'>
          <img className='header__image' src ={logo}
                  alt=""
                  />
          </Link>
          <div className = "header_search">
              <input className = "header_searchInput" type = "text"></input>  
              <SearchIcon className = "header_searchIcon"/>
          </div>
          <div className = "header_nav">
               <Link to={!auth.currentUser && '/login'} style={{ textDecoration: 'none' }}>
                    <div  onClick = {handleAuthentication} className = 'header_option'>
                        <span className = 'header_optionLineOne'>Hello  {userEmail} </span> 
                        <span className = 'header_optionLineTwo'>{auth.currentUser ? 'Sign Out':'Sign In'}</span> 
                    </div>
               </Link>
               <div className = 'header_option'>
               <span className = 'header_optionLineOne'>Returns</span> 
                   <span className = 'header_optionLineTwo'>& Orders</span> 
               </div>
               <div className = 'header_option'>
                    <span className = 'header_optionLineOne'>Your</span> 
                   <span className = 'header_optionLineTwo'>Prime</span> 
               </div>
               <Link to='/checkout' style={{ textDecoration: 'none' }}>
                    <div className = "header_optionBasket">
                        <ShoppingBasketIcon/>
                        <span className = "header_optionLineTwo header_basketCount">
                            {basket.length}
                        </span>
                    </div>
               </Link>
               
              
          </div>
        </div>
    )
}

export default Header
