import React from 'react'
import { Image, Row, Col, Card } from 'react-bootstrap'
import './ProductIntro.scss'

const ProductIntro = () => {
  return (
    <div className="product-intro p-5">
        <h2 className='text-center'>AirPods2th</h2>
        <Row>
            <Col sm="12" md="6">
                <Card className="product-intro__cards m-1">
                    <Row className="p-3 justify-content-center d-flex align-items-center">
                        <Col sm="12" md="6" className="text-center">
                            <Card.Img src="/assets/imgs/airpodRight.png" className='w-25' />
                        </Col>
                        <Col sm="12" md="6">
                            <ul dir="ltr" className='pt-2'>
                                <li className="pb-1">Spatial audio with dynamic head tracking</li>
                                <li className="pb-1">Sweat and water resistant</li>
                                <li className="pb-1">MagSafe, wireless, and Lightning charging</li>
                            </ul>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col sm="12" lg="6">
                <Card className="product-intro__cards m-1">
                    <Row className="p-3 justify-content-center d-flex align-items-center">
                        <Col sm="12" md="6">
                            <ul dir="ltr" className='pt-2'>
                                <li className="pb-1">MagSafe, wireless, and Lightning charging</li>
                                <li className="pb-1">Active Noise Cancellation</li>
                                <li className="pb-1">Spatial audio with dynamic head tracking</li>
                            </ul>
                        </Col>
                        <Col sm="12" md="6" className="text-center">
                            <Card.Img src="/assets/imgs/airpodLeft.png" className='w-25' />
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default ProductIntro