import React from 'react'
import  './Checkout.css';
import Subtotal from './Subtotal';



function Checkout() {
    return (
        <div className='checkout'>
            
            <div className='checkout__left'>
            <img src='https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-aws.jpg.webp' alt=''/>
                <div>
                    <h2 className='checkout__title'>your shopping basket</h2>
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal/>
            </div>
        </div>
        
    )
}

export default Checkout;
