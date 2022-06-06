import React from 'react'
import { Col, Container, Row, Image, Card } from "react-bootstrap"
import './IntroPart.scss'

const IntroPart = (props) => {
    let introDOM = null;
    if (props.introDir === "right") {
        introDOM = (
            <Row>
                <Col sm="12" md="6">
                    <h2>{props.title}</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                </Col>
                <Col sm="12" md="6" className="d-flex justify-content-center">
                    <Image src={`/assets/imgs/${props.urlPath}.svg`} className="w-50" />
                </Col>
            </Row>
        )
    }else {
        introDOM = (
            <Row>
                <Col sm="12" md="6" className="d-flex justify-content-center">
                    <Image src={`/assets/imgs/${props.urlPath}.svg`} className="w-50" />
                </Col>
                <Col sm="12" md="6">
                    <h2>{props.title}</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                </Col>
            </Row>
        )
    }

  return (
            <>
            <div className="introPart-custom">
                <Container>
                    {introDOM}
                </Container>
            </div>
            {props.mainIntro ? (
                <div className="introPart-footer d-none">
                        <Container>
                            <Row>
                                <Col sm="12" md="4" className="introFooter-card">
                                    <Card.Body className="text-center">
                                        <i className="fa fa-money"></i>
                                        <Card.Text>کف ترین قیمت</Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col sm="12" md="4" className="introFooter-card">
                                    <Card.Body className="text-center">
                                        <i className="fa fa-comment"></i>
                                        <Card.Text>پاسخگویی و پشتیبانی</Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col sm="12" md="4" className="introFooter-card">
                                    <Card.Body className="text-center">
                                        <i className="fa fa-diamond"></i>
                                        <Card.Text>بالاترین کیفیت</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                    </Container>
                    </div>
            ) : null}
        </>
  )
}

export default IntroPart
