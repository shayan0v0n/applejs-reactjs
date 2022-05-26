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
                        <LinkContainer to="/account">
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
                        <LinkContainer to="/shop/mobile">
                            <NavDropdown.Item onClick={stopClickPropagation}>موبایل</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/shop/laptop">
                            <NavDropdown.Item onClick={stopClickPropagation}>لب تاب</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/shop/watch">
                            <NavDropdown.Item onClick={stopClickPropagation}>ساعت</NavDropdown.Item>
                        </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to="/about-us">
                            <Nav.Link>درباره ما</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                        <LinkContainer to="/">
                            <Navbar.Brand>AppleJS</Navbar.Brand>
                        </LinkContainer>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;