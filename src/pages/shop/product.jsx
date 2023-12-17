import React, { useContext } from 'react'
import{ShopContext} from '../../context/shop-context'

export const Product = (props) => {
  const{id,productName,price,productImage} = props.data
  const {addToCart,cartItems} = useContext(ShopContext)
  const cartItemAmt = cartItems[id]
  return (
    <div className='product'>
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ₹{price}</p>
      </div>
      <button className='addToCartBtn' onClick={() => addToCart(id)}>Add to Cart {cartItemAmt>0 && <> ({cartItemAmt})</>}</button>
    </div>
  )
}
