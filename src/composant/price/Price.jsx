import {React, useState} from "react";
import {FaPlus, FaMinus} from 'react-icons/fa'
import {BsCart3} from 'react-icons/bs'
import './price.css'


const Price = (props) => {
  const price = 125;
  const [Quantity, setQuantity] = useState(0)

  console.log(props)
  return (
    <div className="price-container">
      <div className='price'>
        <h1>${price}.00 <span>50%</span></h1>
        <p>$250.00</p>
        </div>
       
       <div className="plus-minus">
        <FaMinus className="minus-icon" onClick={() => Quantity === 0? null : setQuantity(Quantity - 1)} />
             <span>{Quantity}</span>
         <FaPlus className="plus-icon" onClick={() => setQuantity(Quantity + 1)}/>
       </div>

       <div className="add-cart" onClick={() => props.setItems({quantity: Quantity, price: price})}>
         <BsCart3 />
         <p>Add to cart</p>
       </div>
    </div>
  )
}

export default Price
