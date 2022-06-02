import React from 'react'
import IntroProduct from '../../../components/IntroProduct/IntroProduct'
import Products from '../../../components/Products/Products'
import './AirtagShop.scss'

const AirtagShop = () => {

  return (
    <div>
        <IntroProduct
         urlImage="/assets/imgs/airtagBanner.png"
         productTitle="خرید ایرتگ از اپل جی اس" />
        <Products dataPath="airtag" />
    </div>
  )
}

export default AirtagShop