import React, { useState } from 'react'
import { Modal, Form, FloatingLabel, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Login.scss'

const Login = props => {
const navigate = useNavigate();
const [userNameValidation, setUserNameValidation] = useState(false);
const [emailValidation, setEmailValidation] = useState(false);
const [passwordValidation, setPassowrdValidation] = useState(false);
const [formValidation, setFormValidation] = useState(false);

const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: ""
})

const checkUserNameValidation = () => {
    if (formData.userName.length >= 6) {
        setUserNameValidation(true);
    }else {
        setUserNameValidation(false);
    }
    checkFormValidation()
}

const checkEmailValidation = () => {
    if (formData.email.includes("@gmail.co")) {
        setEmailValidation(true);
    }else {
        setEmailValidation(false);
    }
    checkFormValidation()
}

const checkPasswordValidation = () => {
    if (formData.password.length >= 6) {
        setPassowrdValidation(true);
    }else {
        setPassowrdValidation(false);
    }
    checkFormValidation()
}

const checkFormValidation = () => {
    if (userNameValidation && emailValidation && passwordValidation) {
        setFormValidation(true);
    }else {
        setFormValidation(false);
    }
}

const sendFormData = () => {
    const userInfo = {
        userName: formData.userName,
        email: formData.email,
        password: formData.password,
        cart: [],
        approvedCart: []
    }

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    props.handleClose()
    setFormData({
        userName: "",
        email: "",
        passowrd: ""
    })
    setUserNameValidation(false)
    setEmailValidation(false)
    setPassowrdValidation(false)
    setFormValidation(false)
}

  return (
    <Modal
    show={props.show}
    onHide={props.handleClose}
    backdrop="static"
    keyboard={false}>
    <Modal.Header closeButton></Modal.Header>
    <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel
                    label="نام و نام خانوادگی"
                    className="mb-3"
                    style={{ left:"none" }}>
                <Form.Control type="text" placeholder="." value={formData.userName} isInvalid={!userNameValidation}
                 onChange={e => {setFormData({...formData, userName: e.target.value}); checkUserNameValidation()}} />
            </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <FloatingLabel
                    label="ایمیل"
                    className="mb-3"
                    style={{ left:"none" }}>
                    <Form.Control type="email" placeholder="." value={formData.email} isInvalid={!emailValidation}
                    onChange={e => {setFormData({...formData, email: e.target.value}); checkEmailValidation()}} />
            </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <FloatingLabel
                    label="رمز عبور"
                    className="mb-3"
                    style={{ left:"none" }}>
                <Form.Control type="password" placeholder="." value={formData.password} isInvalid={!passwordValidation}
                 onChange={e => {setFormData({...formData, password: e.target.value}); checkPasswordValidation()}} />
            </FloatingLabel>
            </Form.Group>
        <Button className="w-100 bg-success"
         disabled={!formValidation} onClick={() => {sendFormData(); navigate("/account")}}>ارسال</Button>
        </Form>
    </Modal.Body>
    </Modal>
  )
}

export default Login;