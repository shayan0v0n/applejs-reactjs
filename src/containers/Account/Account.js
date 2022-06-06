import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AccountHeader from '../../components/AccountHeader/AccountHeader'
import './Account.scss'
import ApprovedCartAccount from './ApprovedCartAccount/ApprovedCartAccount';
import CartAccount from './CartAccount/CartAccount';
import EditInfoAccount from './EditInfoAccount/EditInfoAccount';

const Account = () => {
    const [currentPage, setCurrentPage] = useState("home");
    const navigate = useNavigate()
    const setCurrentHandler = current => setCurrentPage(current);
    const logoutHandler = () => {
        localStorage.removeItem("userInfo")
        navigate("/")
    }
    let prevAccountDOM = <CartAccount />;
    switch(currentPage) {
        case "cart":
            prevAccountDOM = (
                <CartAccount />
            )
        break;
        case "aprovedCart":
            prevAccountDOM = (
                <ApprovedCartAccount />
            )
        break;
        case "editInfo":
            prevAccountDOM = (
                <EditInfoAccount />
            )
        break;
        case "leave":
            logoutHandler()
        break;
    }

  return (
    <div>
        <AccountHeader setCurrentHandler={setCurrentHandler} />
        <div>
            {prevAccountDOM}
        </div>
    </div>
  )
}

export default Account