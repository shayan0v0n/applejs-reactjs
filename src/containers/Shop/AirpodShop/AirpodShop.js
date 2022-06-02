import React from 'react'
import IntroProduct from '../../../components/IntroProduct/IntroProduct';
import Products from '../../../components/Products/Products';

const AirpodShop = () => {

  return (
    <div>
        <IntroProduct
         urlImage="/assets/imgs/airpodBanner.png"
         productTitle="خرید ایرپاد از اپل جی اس" />
         <Products dataPath="airpad" />
    </div>
  )
}

export default AirpodShop