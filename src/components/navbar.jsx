import React from 'react'
import {Link} from "react-router-dom"
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faApple } from  '@fortawesome/free-brands-svg-icons'

export const Navbar = () => {
  return (
    <div className='navbar'>
      
         <Link to='/' className='title'><FontAwesomeIcon icon={faApple}/> Apple</Link>

        <div className='links'>
            
            <Link to='/cart'>Cart <FontAwesomeIcon icon={faShoppingCart}/>
            </Link>
        </div>
    </div>
  )
}
  