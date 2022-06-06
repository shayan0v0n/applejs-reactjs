import React, { useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import './ShopProductsCard.scss'

const ShopProductsCard = props => {

  return (
      <Card className='m-4 allproducts-card' onClick={() => props.handleShow(props.cardData)}>
            <Row>
                <Col sm="12" md="4">
                    <Card.Img src={`/assets/imgs/${props.cardData.name}.png`} />
                </Col>
                <Col sm="12" md="8" className="text-place">
                    <div>
                    <Card.Title>نام: {props.cardData.name}</Card.Title>
                    <Card.Text>توضیحات: {props.cardData.desc}</Card.Text>
                    <Card.Text>قیمت: {props.cardData.price}</Card.Text>
                    <Card.Text>دسته بندی: {props.cardData.category.map(item => (<span> | {item} | </span>))}</Card.Text>
                    </div>
                </Col>
            </Row>
        </Card>
  )
}

export default ShopProductsCard