import React from 'react';
import './ShowProducts.scss';
import { Modal, Image, Button, Row, Col } from 'react-bootstrap'

const ShowProducts = props => {
    const allNewCard = (currentProduct) => {
        const prevStorage = JSON.parse(localStorage.getItem("userInfo"));
        if (prevStorage) {
            const newStorage = {
                ...prevStorage,
                cart: [...prevStorage.cart, currentProduct]
            };
            localStorage.setItem("userInfo", JSON.stringify(newStorage));
            props.handleClose()
            props.addToCartSuccessOpen()
        }else {
            props.handleClose()
            props.loginErrorModalOpen()
        }
    }

    return (
        <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static">
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="text-center">
                <Image src={`/assets/imgs/${props.currentProduct.name}.png`} className="w-25" />
                <div className="text-center mt-3">
                    <h2>{props.currentProduct.name}</h2>
                    <p>{props.currentProduct.desc}</p>
                    <p>{props.currentProduct.price}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Row className='w-100'>
                    {props.accountToken ? (
                        <>
                            <Col sm="12" md="12">
                                <Button className="btn btn-danger w-100 m-1" onClick={() => props.handleClose()}>بستن محصول</Button>
                            </Col>
                        </>
                    ) : (
                        <>
                            <Col sm="12" md="6">
                                <Button className="btn btn-success w-100 m-1" onClick={() => allNewCard(props.currentProduct)}>اضافه کردن به سبد خرید</Button>
                            </Col>
                            <Col sm="12" md="6">
                                <Button className="btn btn-danger w-100 m-1" onClick={() => props.handleClose()}>بستن محصول</Button>
                            </Col>
                        </>
                    )}
                </Row>
            </Modal.Footer>
        </Modal>
    )
}

export default ShowProducts;