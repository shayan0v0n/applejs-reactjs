import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import CartAccountCard from './CartAccountCard/CartAccountCard'
import CartsManage from '../../../components/CartsManage/CartsManage'
import ShowProducts from '../../../components/ShowProducts/ShowProducts'
import './CartAccount.scss'
import CheckoutModal from '../../../components/CheckoutModal/CheckoutModal'

const CartAccount = () => {
  const [prevStorage, setPrevStorage] = useState(JSON.parse(localStorage.getItem("userInfo")));
  const [ currentProducts, setCurrentProducts ] = useState({})
  const [ show, setShow ] = useState(false);
  const handleShow = (current) => {setShow(true); setCurrentProducts(current)}
  const handleClose = () => {setShow(false)}
  const [ checkoutSHow, setCheckoutShow ] = useState(false);
  const handleCheckoutClose = () => {setCheckoutShow(false)}
  const handleCheckoutOpen = () => {setCheckoutShow(true)}
  const deleteProduct = (itemData) => {
    const newStorage = prevStorage.cart.filter(item => item.name !== itemData.name);
    const updatedStorage = {
      ...prevStorage,
      cart: newStorage
    }
    
    localStorage.setItem("userInfo", JSON.stringify(updatedStorage))
    setPrevStorage(JSON.parse(localStorage.getItem("userInfo")))
  }

  const checkoutHandler = () => {
    const preventApprovedCart = prevStorage.cart;
    const preventCart = prevStorage.approvedCart;
    const mergeCarts = [...preventApprovedCart, ...preventCart]
    const updatedStorage = {
      ...prevStorage,
      approvedCart: mergeCarts,
      cart: []
    }
    localStorage.setItem("userInfo", JSON.stringify(updatedStorage))
    setPrevStorage(JSON.parse(localStorage.getItem("userInfo")))
  }

  return (
    <Container>
      <ShowProducts show={show} handleClose={handleClose} currentProduct={currentProducts} accountToken={true} />
      <CheckoutModal show={checkoutSHow} handleClose={handleCheckoutClose} deleteProduct={deleteProduct} checkoutHandler={checkoutHandler} />
      <CartsManage />
      <Button className="btn-success checkoutButton w-100" onClick={() => handleCheckoutOpen()}>تسویه حساب</Button>
      <Row>
        {prevStorage.cart.map(item => (
          <Col sm="12" md="4">
            <CartAccountCard cardData={item} handleShow={handleShow} deleteProduct={deleteProduct} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CartAccount;