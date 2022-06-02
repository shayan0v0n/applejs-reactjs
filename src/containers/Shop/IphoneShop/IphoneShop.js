import React from 'react'
import IntroProduct from '../../../components/IntroProduct/IntroProduct'
import Products from '../../../components/Products/Products'

const IphoneShop = () => {
  return (
    <div>
          <IntroProduct
         urlImage="/assets/imgs/iphone.png"
         productTitle="خرید آیفون از اپل جی اس" />
         <Products dataPath="iphone" />
    </div>
  )
}

export default IphoneShop