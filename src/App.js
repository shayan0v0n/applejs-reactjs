import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      {/* <Routes> */}
          <div className='p-5'></div>
      {/* </Routes> */}
      <Footer />
    </>
  )
}

export default App