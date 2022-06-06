import React from 'react';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'
import './CartsManage.scss';

const CartAccountHeader = () => {
    const prevStorage = JSON.parse( localStorage.getItem("userInfo"));
    let cartCount = prevStorage.cart.length;
    let cartPrices = prevStorage.cart.reduce((totalPrice, prevPrice) => totalPrice + prevPrice.price, 0);
    let approvedCartCount = prevStorage.approvedCart.length;
    let approvedCartPrices = prevStorage.approvedCart.reduce((totalPrice, prevPrice) => totalPrice + prevPrice.price, 0);

    return (
        <div className="cartAccount-header">
            <Row>
                <OverlayTrigger
                 placement="bottom"
                 overlay={<Tooltip>{cartCount}</Tooltip>}>
                    <Col sm="3" className="text-center">
                        <i className="fa fa-shopping-cart"></i>
                        <p>سبد خرید</p>
                    </Col>
                </OverlayTrigger>
                <OverlayTrigger
                 placement="bottom"
                 overlay={<Tooltip>{cartPrices}</Tooltip>}>
                    <Col sm="3" className="text-center">
                        <i class="fa fa-money"></i>
                        <p>جمع قیمت سبد خرید</p>
                    </Col>
                </OverlayTrigger>
                <OverlayTrigger
                 placement="bottom"
                 overlay={<Tooltip>{approvedCartCount}</Tooltip>}>
                    <Col sm="3" className="text-center">
                        <i className="fa fa-shopping-bag"></i>
                        <p>خریداری شده</p>
                    </Col>
                 </OverlayTrigger>
                <OverlayTrigger
                 placement="bottom"
                 overlay={<Tooltip>{approvedCartPrices}</Tooltip>}>
                    <Col sm="3" className="text-center">
                        <i class="fa fa-money"></i>
                        <p>جمع قیمت خریداری شده</p>
                    </Col>
                </OverlayTrigger>
            </Row>
        </div>
    )
}

export default CartAccountHeader;