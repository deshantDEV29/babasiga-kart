import React from 'react'
import  './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider'
import {auth} from './firebase'


function Checkout() {
    const [{basket, user},dispatch] = useStateValue();

    var userEmail = 'Guest';
    if(auth.currentUser){
        userEmail = auth.currentUser.email
    }
    

    return (
        <div className='checkout'>
            
            <div className='checkout__left'>
            <img src='https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-aws.jpg.webp' alt=''/>
                <div>
                    <h3>{userEmail}</h3>
                    <h2 className='checkout__title'>your shopping basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                    ))}

                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal/>
            </div>
        </div>
        
    )
}

export default Checkout;
