import React from 'react'
import { Col, Row, Container, Image } from 'react-bootstrap'
import './IntroProduct.scss'

const IntroProduct = (props) => {
  return (
    <div className="airpod-banner-custom">
        <Container>
            <Row className="justify-content-center d-flex align-items-center">
                <Col sm="12" md="5">
                    <Image src={props.urlImage} className="w-50" />
                </Col>
                <Col sm="12" md="6">
                    <h2>{props.productTitle}</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default IntroProduct