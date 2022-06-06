import React from 'react'
import {Card} from 'react-bootstrap'
import './CategoriesCards.scss'

const CategoriesCards = props => {
  return (
    <Card className="text-center categories-card-custom animate__animated animate__fadeIn" onClick={() => props.handleShow(props.item)}>
        <Card.Body>
            <Card.Title as="h3">{props.item.name}</Card.Title>
            <Card.Text>{props.item.desc}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default CategoriesCards