import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";


function Header() {
    return (
        <div className = 'header'>
         <h1 className = "header_name">Babasiga Kart</h1>
          <div className = "header_search">
              <input className = "header_searchInput" type = "text"></input>  
              <SearchIcon className = "header_searchIcon"/>
          </div>
          <div className = "header_nav">
               <div className = 'header_option'>
                   <span className = 'header_optionLineOne'>Hello Quest</span> 
                   <span className = 'header_optionLineTwo'>Sign In</span> 
               </div>
               <div className = 'header_option'>
               <span className = 'header_optionLineOne'>Returns</span> 
                   <span className = 'header_optionLineTwo'>& Orders</span> 
               </div>
               <div className = 'header_option'>
                    <span className = 'header_optionLineOne'>Your</span> 
                   <span className = 'header_optionLineTwo'>Prime</span> 
               </div>
               <div className = "header_optionBasket">
                   <ShoppingBasketIcon/>
                   <span className = "header_optionLineTwo header_basketCount">0</span>
               </div>
              
          </div>
        </div>
    )
}

export default Header
