import React from 'react'
import { Card } from 'react-bootstrap'
import './ProductsCard.scss'

const ProductsCard = props => {
  return (
    <Card className="text-center product-card-custom" onClick={() => props.handleShow(props.item)}>
        <Card.Img src={`/assets/imgs/${props.item.name}.png`} fluid />
        <Card.Body>
            <Card.Title>{props.item.name}</Card.Title>
            <Card.Text>{props.item.desc}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default ProductsCard