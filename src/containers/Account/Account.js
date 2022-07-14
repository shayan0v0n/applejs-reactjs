import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AccountHeader from '../../components/AccountHeader/AccountHeader'
import './Account.scss'
import ApprovedCartAccount from './ApprovedCartAccount/ApprovedCartAccount';
import CartAccount from './CartAccount/CartAccount';
import EditInfoAccount from './EditInfoAccount/EditInfoAccount';
import ExitModal from './ExitModal/ExitModal'

const Account = () => {
    const [currentPage, setCurrentPage] = useState("home");
    const [exitModal, setExitModal] = useState(false)
    const [exitStatus, setExitStatus] = useState(false)
    const setExitModalHandler = (modalStatus) => setExitModal(modalStatus);
    const navigate = useNavigate()
    const setCurrentHandler = current => {
        if (current !== "leave") {
            setCurrentPage(current)
        }else {
            setCurrentPage(current)
            setExitModalHandler(true)
        }
    };
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
            if (exitStatus) logoutHandler();
        break;
    }

  return (
    <div>
        <AccountHeader setCurrentHandler={setCurrentHandler} />
        <ExitModal show={exitModal} closeHandler={setExitModalHandler} exitStatusHandler={setExitStatus} />
        <div>
            {prevAccountDOM}
        </div>
    </div>
  )
}

export default Account