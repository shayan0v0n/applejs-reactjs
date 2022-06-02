import React from 'react'
import IntroProduct from '../../../components/IntroProduct/IntroProduct'
import Products from '../../../components/Products/Products'

const AppleWatchShop = () => {
  return (
    <div>
          <IntroProduct
          urlImage="/assets/imgs/appleWatch.png"
          productTitle="خرید اپل واچ از اپل جی اس" />
         <Products dataPath="appleWatch" />
    </div>
  )
}

export default AppleWatchShop