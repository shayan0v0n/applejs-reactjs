import React from 'react'
import './About.scss'
import IntroPart from '../../components/IntroPart/IntroPart'
import { Carousel, Container, Row, Col, Card, Tooltip, OverlayTrigger } from 'react-bootstrap'

const About = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      دردسترس نمی باشد
    </Tooltip>
  );
  return (
    <div>
      <IntroPart title="با ما در تماس باشید" introDir="right" urlPath="undraw_personal_text_re_vqj3" />
        <Container className="my-4">
            <h2 className="text-center">راه های ارتباطی</h2>
            <Carousel className="carousel-category">
                <Carousel.Item>
                    <Row className='text-center m-3'>
                      <Col sm="12" md="4" className='social-cols'>
                          <a href="https://https//web.telegram.org/k/shayan._.vn">
                            <Card>
                              <i className="fa fa-telegram"></i>
                              <h2>Telegram</h2>
                            </Card>
                          </a>
                      </Col>
                      <Col sm="12" md="4" className='social-cols'>
                        <a href="https://github.com/shayan0v0n">
                          <Card>
                            <i className="fa fa-github"></i>
                            <h2>Github</h2>
                          </Card>
                        </a>
                      </Col>
                      <Col sm="12" md="4" className='social-cols'>
                        <a href="https://www.instagram.com/shayan._vn/">
                          <Card>
                            <i className="fa fa-instagram"></i>
                            <h2>Instagram</h2>
                          </Card>
                        </a>
                      </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row className='text-center m-3'>
                      <Col sm="12" md="4" className='social-cols'>
                      <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}>
                          <Card>
                            <i className="fa fa-facebook"></i>
                            <h2>Facebook</h2>
                          </Card>
                      </OverlayTrigger>
                      </Col>
                      <Col sm="12" md="4" className='social-cols'>
                        <a href="https://www.linkedin.com/in/shayan-vosoughi-60b347180/">
                          <Card>
                            <i className="fa fa-linkedin"></i>
                            <h2>Linkedin</h2>
                          </Card>
                        </a>
                      </Col>
                      <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}>
                      <Col sm="12" md="4" className='social-cols'>
                        <Card>
                          <i className="fa fa-twitter"></i>
                          <h2>Twitter</h2>
                        </Card>
                      </Col>
                      </OverlayTrigger>
                  </Row>
                </Carousel.Item>
            </Carousel>
        </Container>
    </div>
  )
}

export default About