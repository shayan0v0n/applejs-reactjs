import React, { useState } from 'react';
import './Header.scss';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom'

const Header = props => {
    const [showDropdown, setShowDropdown] = useState(false)
    const navigate = useNavigate();
    const stopClickPropagation = event => event.stopPropagation();

    return (
        <header>
            <Navbar expand="md" variant="dark" className="navbar-custom">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <LinkContainer to="/account" className="shopping-cart-custom">
                            <Nav.Link>حساب کاربری</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/">
                            <Nav.Link>صفحه اصلی</Nav.Link>
                        </LinkContainer>
                        <NavDropdown
                        title="فروشگاه"
                        id="basic-nav-dropdown"
                        className="basic-nav-dropdown"
                        variant="dark"
                        show={showDropdown}
                        onMouseLeave={() => setShowDropdown(false)}
                        onMouseOver={() => setShowDropdown(true)}
                        onClick={() => navigate('/shop')}
                        to='/shop'
                        >
                        <LinkContainer to="/shop/iphone">
                            <NavDropdown.Item onClick={stopClickPropagation}>iphone</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/shop/mac">
                            <NavDropdown.Item onClick={stopClickPropagation}>mac</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/shop/ipad">
                            <NavDropdown.Item onClick={stopClickPropagation}>ipad</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/shop/appleWatch">
                            <NavDropdown.Item onClick={stopClickPropagation}>apple watch</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/shop/airpod">
                            <NavDropdown.Item onClick={stopClickPropagation}>airpod</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/shop/airtag">
                            <NavDropdown.Item onClick={stopClickPropagation}>airtag</NavDropdown.Item>
                        </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to="/about-us">
                            <Nav.Link>درباره ما</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                        <LinkContainer to="/cart">
                            <div className="shopping-cart-custom">
                                <i className="fa fa-shopping-cart"></i>
                            </div>
                        </LinkContainer>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;