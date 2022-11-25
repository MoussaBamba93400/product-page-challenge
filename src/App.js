import './App.css';
import { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa'
import {HiX} from 'react-icons/hi'
import Header from './composant/Header/Header';
import Carroussel from './composant/carroussel/Carroussel';
import Price from './composant/price/Price';
import thumbnail from './assets/images/image-product-1-thumbnail.jpg'



function App() {

  const [Items, setItems] = useState({price:0, quantity:0})
  const [CartHandler, setCartHandler] = useState(false)
  // handle menu display
  const [Menu, setMenu] = useState(false)

console.log(Items)
  return (
    <div className="App">
      <Header items={Items} cartHandler={setCartHandler} cartState={CartHandler} menu={Menu} setMenu={setMenu} />
      <div className='desktop-content'>
      <Carroussel />

      <div className='desktop-second-part'>
      <main>
        <h1>SNEAKER COMPANY</h1>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll whithstand everything the weather can offer.</p>
      </main>
 
      <Price Items={Items} setItems={setItems}/>
      </div>

      
      <div className={`open-cart ${CartHandler? '': "cart-close"}`} >
        <h2>Cart</h2>
         <div className='thumnail-and-text ' >
          <img src={thumbnail}></img>
          <div className='cart-text'>
            <p className='cart-title'>Autumn Limeted Edition</p>
            <p>${Items.price} x {Items.quantity} <strong style={{color: "black"}}>${Items.quantity * Items.price}</strong></p>
          </div>
          <FaTrashAlt onClick={() => setItems({price:0, quantity:0})} />
          </div>


           <div className='checkout-btn'>
              <button>Checkout</button>
           </div>
      </div>
       </div>
       



       <div className={`menu  ${Menu? "display": "no-display"} `}>
          <ul>
            <li id='cross-logo' onClick={() => setMenu(!Menu)}><HiX /></li>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
       </div>

    </div>
  );
}

export default App;
