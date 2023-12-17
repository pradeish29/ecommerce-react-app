import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from  '@fortawesome/free-brands-svg-icons'
import './navbar.css'

export const Footer = () => {
  return (
    <div className='footer'>
       <p>  All rights reserverd 2024, Apple.Inc  <FontAwesomeIcon icon={faApple}/> </p>
    </div>
  )
}
