import './header.css';
import Profile from '../../assets/images/image-avatar.png'
import Logo from '../../assets/images/logo.svg'
import Cart from '../../assets/images/icon-cart.svg'
import React from 'react'

const Header = (props) => {

    let cart = props.items


    console.log(props)

  return (
    <header className='header'>
      <div className='logo-menu-icon'>
      <svg className='menu-logo' onClick={() => props.setMenu(!props.menu)} width="20" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd"/></svg>


       <img src={Logo} />
      
      <ul className='menu-desktop'>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
      </div>
       
      <div className="cart-profile">
           {cart.quantity > 0? <span className='cart-quantity'>{cart.quantity}</span>: null}
          <img className='cart' src={Cart} onClick={() => props.cartState?  props.cartHandler(false): props.cartHandler(true)}  alt="cart" />
          <img className='profile' src={Profile} alt="profile" />
      </div>
    </header>
  )
}

export default Header
