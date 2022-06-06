import React from 'react';
import { Modal, Row, Col, Image, Button } from 'react-bootstrap'
import './CheckoutModal.scss';

const CheckoutModal = props => {
    const prevStorage = JSON.parse(localStorage.getItem("userInfo"));


    return (
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            {prevStorage.cart.map(item => (
                <div>
                    <Row>
                        <Col sm="12" md="4">
                            <Image src={`/assets/imgs/${item.name}.png`} className="w-50" />
                        </Col>
                        <Col sm="12" md="6">
                            <p>نام محصول: {item.name}</p>
                            <p>قیمت محصول: {item.price}</p>
                        </Col>
                        <Col sm="12" md="2">
                            <Button className="btn btn-danger" onClick={() => props.deleteProduct(item)}>
                                <i className="fa fa-times"></i>
                            </Button>
                        </Col>
                    </Row>
                </div>
            ))}
        </Modal.Body>
        <Modal.Footer className="w-100">
            <Row className="w-100">
                <Col sm="12" md="6">
                    <Button className="btn btn-success w-100" onClick={() => props.checkoutHandler()}>تسویحه حساب</Button>
                </Col>
                <Col sm="12" md="6">
                    <Button className="btn btn-danger w-100" onClick={() => props.handleClose()}>بستن صفحه</Button>
                </Col>
            </Row>
        </Modal.Footer>
      </Modal>
    )
}

export default CheckoutModal;