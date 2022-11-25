import './carroussel.css'
import Product1 from '../../assets/images/image-product-1.jpg';
import Thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import Product2 from '../../assets/images/image-product-2.jpg';
import Thumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg'
import Product3 from '../../assets/images/image-product-3.jpg';
import Thumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg'
import Product4 from '../../assets/images/image-product-4.jpg';
import Thumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg'
import { useState } from 'react';

import React from 'react'

let allImg = [Product1, Product2, Product3, Product4]


const Carroussel = () => {
   const [CurrImg, setCurrImg] = useState(0)


  return (
    <div className='carroussel'>
        <div className='arrow left-arrow'  onClick={() => setCurrImg( CurrImg === 0? 3: CurrImg - 1)}>
        <svg  width="15" height="20" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
        </div>
        <div className='arrow right-arrow' onClick={() => setCurrImg( CurrImg === 3? 0: CurrImg + 1)}>
        <svg  width="15" height="20" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
        </div>
      <img className='main-img' src={allImg[CurrImg]} alt="" />

      <ul className='desktop-imgs'>
        <li><img className='product-img' src={Thumbnail1} alt="product" /></li>
        <li><img className='product-img' src={Thumbnail2} alt="product" /></li>
        <li><img className='product-img' src={Thumbnail3} alt="product" /></li>
        <li><img className='product-img' src={Thumbnail4} alt="product" /></li>
      </ul>
    </div>
  )
}

export default Carroussel
