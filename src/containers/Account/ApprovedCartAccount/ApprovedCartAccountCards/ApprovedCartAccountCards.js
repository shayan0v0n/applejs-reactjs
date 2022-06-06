import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap'
import './ApprovedCartAccountCards.scss';

const CartAccountCard = props => {
    return (
        <Card className="cartAccount-custom">
            <Card.Img src={`/assets/imgs/${props.cardData.name}.png`} />
            <Card.Body className="text-center">
                <Card.Title>{props.cardData.name}</Card.Title>
                <Card.Text>{props.cardData.desc}</Card.Text>
                <Card.Text>{props.cardData.price}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col sm="12" md="12">
                        <Button className="w-100 btn-success" onClick={() => props.handleShow(props.cardData)}>دیدن محصول</Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}

export default CartAccountCard;