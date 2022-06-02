import React from 'react'
import './IntroPart.scss'
import { Col, Container, Row, Image } from "react-bootstrap"

const IntroPart = () => {
  return (
    <div className="introPart-custom">
        <Container>
            <Row>
                <Col sm="12" md="6">
                    <h2>خرید کالای اپل از اپل جی اس</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                </Col>
                <Col sm="12" md="6" className="d-flex justify-content-center">
                    <Image src="/assets/imgs/undraw_real_time_sync_re_nky7.svg" className="w-50" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default IntroPart