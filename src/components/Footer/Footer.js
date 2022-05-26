import React from 'react';
import './Footer.scss';
import { Col, Row, Container, Nav, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const Footer = props => {
    return (
        <footer className="footer-custom">
            <Container>
                <Row>
                    <Col sm="12" md="8">
                        <Nav className='pb-3'>
                            <LinkContainer to="/account">
                                <Nav.Link>حساب کاربری</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/">
                                <Nav.Link>صفحه اصلی</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/shop">
                                <Nav.Link>فروشگاه</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about-us">
                                <Nav.Link>درباره ما</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <div className='pb-5'>
                            <p className="p-2">شبکه های اجتماعی:
                            <a href="https://https://web.telegram.org/k/shayan._.vn"><i className="fa p-2 fa-telegram icon-social"></i></a>
                            <a href="https://github.com/shayan0v0n"><i className="fa p-2 fa-github icon-social"></i></a>
                            <a href="https://www.linkedin.com/in/shayan-vosoughi-60b347180/"><i className="fa p-2 fa-linkedin icon-social"></i></a>
                            <a href="https://www.instagram.com/shayan._vn/"><i className="fa p-2 fa-instagram icon-social"></i></a>
                            </p>
                        </div>
                        <div>
                            <p>تمامی حقوق برای اپل جی اس محفوظ است.</p>
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <Image src="/assets/imgs/security.png" fluid />
                        <Image src="/assets/imgs/security2.svg" fluid />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;