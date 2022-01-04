  import React from 'react'
  import "./Home.css"
  import Product from './Product';
  

  
  function Home() {
      return (
          <div className='home'>
              
              
              <div className='home__container'>
                  <img 
                  className='home_image' src ="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg"
                  alt=""
                  />
                
                <div className='home__row'>
                   <Product title='The Lean Start Up' image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'price={29.99} rating={5} />
                   <Product title='Wireless Bluetooth Speakers' image='https://d287ku8w5owj51.cloudfront.net/images/products/hero/creative-t15-wireless/hero-creative-t15-wireless.jpg?width=1500'price={59.99} rating={3}/>
                  
                </div>
                <div className='home__row'>
                  <Product title='Samsung Watch ' image='https://i5.walmartimages.com/asr/cfea8d3f-355a-4f48-96f9-383dd9d03130_1.bb98d18f3da770fa1678ddf7aa1d8b6b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'price={260.00} rating={5} />
                  <Product title='Apple iPad 7th Gen' image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-wifi-gold-2019?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1593017704000'price={1009.99} rating={3}/>
                  <Product title='HP Laptop' image='https://m.media-amazon.com/images/I/81LaRDm7leL._AC_SL1500_.jpg'price={2009.99} rating={3}/>
               
                </div>
                <div className='home__row'>
                <Product title='Samsung TV' image='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6290/6290167_sd.jpg;maxHeight=640;maxWidth=550'price={3499.00} rating={4}/>
                   
                </div>
                
               
              </div> 
          </div>
      )
  }
  
  export default Home;
  