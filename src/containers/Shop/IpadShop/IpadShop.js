import React from 'react'
import IntroProduct from '../../../components/IntroProduct/IntroProduct'
import Products from '../../../components/Products/Products'

const IpadShop = () => {
  return (
    <div>
          <IntroProduct
         urlImage="/assets/imgs/ipad.png"
         productTitle="خرید آیپد از اپل جی اس" />
         <Products dataPath="ipad" />
    </div>
  )
}

export default IpadShop