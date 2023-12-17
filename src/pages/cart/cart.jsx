import React, {useContext} from 'react'
import { PRODUCTS } from '../../products'
import{ShopContext} from '../../context/shop-context'
import { CartItem } from './cart-item'
import './cart.css'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const {cartItems,getTotalAmt} = useContext(ShopContext)
  const totalAmt = getTotalAmt()
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) =>{
          if(cartItems[product.id] !== 0) {
            return <CartItem data={product}/>
          }
          return null;
        })}
      </div>
      {totalAmt>0 ? (
      <div className="checkout">  
        <p>Subtotal : ₹{totalAmt}</p>
        <button onClick={()=>navigate('/ecommerce-react-app')}>Continue Shopping</button>
      </div> 
      ) : ( 
      <h2>Your Cart is Empty</h2>
      ) }
    </div>
  )
}
