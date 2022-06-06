import React, {useState} from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './ApprovedCartAccount.scss'
import ApprovedCartAccountCards from './ApprovedCartAccountCards/ApprovedCartAccountCards'
import CartsManage from '../../../components/CartsManage/CartsManage'
import ShowProducts from '../../../components/ShowProducts/ShowProducts'

const ApprovedCartAccount = () => {
  const [prevStorage, setPrevStorage] = useState(JSON.parse(localStorage.getItem("userInfo")));
  const [ currentProducts, setCurrentProducts ] = useState({})
  const [ show, setShow ] = useState(false);
  const handleShow = (current) => {setShow(true); setCurrentProducts(current)}
  const handleClose = () => {setShow(false)}
  console.log(prevStorage.approvedCart)

  return (
    <Container>
      <ShowProducts show={show} handleClose={handleClose} currentProduct={currentProducts} accountToken={true} />
      <CartsManage />
      <Row>
        {prevStorage.approvedCart.map(item => (
          <Col sm="12" md="4">
            <ApprovedCartAccountCards cardData={item} handleShow={handleShow} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ApprovedCartAccount