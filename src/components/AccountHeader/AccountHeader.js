import React from 'react'
import './AccountHeader.scss'
import { Navbar, Container, Nav } from 'react-bootstrap'

const AccountHeader = props => {
  return (
        <>
            <Nav justify defaultActiveKey="/" className="account-nav">
            <Nav.Item>
                <Nav.Link onClick={() => props.setCurrentHandler("cart")}>سبد خرید</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setCurrentHandler("aprovedCart")}>کالاهای خریده شده</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setCurrentHandler("editInfo")}>ویرایش اطلاعات</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setCurrentHandler("leave")}>خروج</Nav.Link>
            </Nav.Item>
            </Nav>
        </>
  )
}

export default AccountHeader;