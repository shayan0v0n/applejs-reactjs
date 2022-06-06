import React, { useState } from 'react'
import { Form, Card, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './EditInfoAccount.scss'


const EditInfoAccount = () => {
  const navigate = useNavigate();
  const prevStorage = JSON.parse(localStorage.getItem("userInfo"))
  const [userNameValidation, setUserNameValidation] = useState(true);
  const [emailValidation, setEmailValidation] = useState(true);
  const [passwordValidation, setPassowrdValidation] = useState(true);
  const [formValidation, setFormValidation] = useState(true);
  
  const [formData, setFormData] = useState({
      userName: prevStorage.userName,
      password: prevStorage.password,
      email: prevStorage.email
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
    <Container>
      <Card className='editformCustom'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>نام و نام خانوادگی</Form.Label>
        <Form.Control type="text" placeholder="نام و نام خانوادگی..." value={formData.userName} isInvalid={!userNameValidation}
        onChange={e => {setFormData({...formData, userName: e.target.value}); checkUserNameValidation()}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ایمیل</Form.Label>
        <Form.Control type="email" placeholder="پست الکترونیکی..."value={formData.email} isInvalid={!emailValidation}
         onChange={e => {setFormData({...formData, email: e.target.value}); checkEmailValidation()}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>رمزعبور</Form.Label>
        <Form.Control type="password" placeholder="رمزعبور..." value={formData.password} isInvalid={!passwordValidation}
         onChange={e => {setFormData({...formData, password: e.target.value}); checkPasswordValidation()}} />
      </Form.Group>

      <Button variant="success" className="w-100" type="submit" disabled={!formValidation} onClick={() => {sendFormData(); navigate("/")}}>
        ویرایش شود
      </Button>
      </Form>
    </Card>
    </Container>
  )
}

export default EditInfoAccount