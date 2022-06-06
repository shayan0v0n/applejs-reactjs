import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './containers/Home/Home'
import AirpodShop from './containers/Shop/AirpodShop/AirpodShop'
import AirtagShop from './containers/Shop/AirtagShop/AirtagShop'
import IphoneShop from './containers/Shop/IphoneShop/IphoneShop'
import IpadShop from './containers/Shop/IpadShop/IpadShop'
import MacShop from './containers/Shop/MacShop/MacShop'
import AppleWatchShop from './containers/Shop/AppleWatchShop/AppleWatchShop'
import Shop from './containers/Shop/Shop'
import About from './containers/About/About'
import Account from './containers/Account/Account'

const App = () => {
  return (
    <>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/shop/iphone" element={<IphoneShop />} />
            <Route path="/shop/mac" element={<MacShop />} />
            <Route path="/shop/ipad" element={<IpadShop />} />
            <Route path="/shop/appleWatch" element={<AppleWatchShop />} />
            <Route path="/shop/airpod" element={<AirpodShop />} />
            <Route path="/shop/airtag" element={<AirtagShop />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App;