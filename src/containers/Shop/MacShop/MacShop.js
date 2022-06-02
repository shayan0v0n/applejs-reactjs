import React from 'react'
import IntroProduct from '../../../components/IntroProduct/IntroProduct'
import Products from '../../../components/Products/Products'

const MacShop = () => {
  return (
    <div>
      <IntroProduct
      urlImage="/assets/imgs/mac.png"
      productTitle="خرید مک از اپل جی اس" />
      <Products dataPath="mac" />
    </div>
  )
}

export default MacShop