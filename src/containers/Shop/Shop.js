import React, {useState, useEffect} from 'react'
import { Card, Col, Row, Form, Container } from 'react-bootstrap';
import IntroProduct from '../../components/IntroProduct/IntroProduct';
import './Shop.scss';
import ShopProducts from '../../components/ShopProducts/ShopProducts'

const Shop = () => {

  const [filtersSwitch, setFiltersSwitch] = useState({
    iphone: true,
    mac: true,
    ipad: true,
    appleWatch: true,
    airpod: true,
    airtag: true,
  })

  const changeFiltersSwitch = category => {
    const updatedCategory = filtersSwitch[category] = !filtersSwitch[category]
    setFiltersSwitch({
      ...filtersSwitch,
      updatedCategory
    })
  }

  return (
    <div>
        <IntroProduct productTitle="محصولات اپل جی اس" urlImage="/assets/imgs/undraw_empty_cart_co35.svg" />
        <Container>
          <Row>
            <Col sm="12" md="8">
                <ShopProducts filterStatus={filtersSwitch} />
            </Col>
            <Col sm="12" md="4" className="d-none d-md-block">
              <div className='filter-place'>
              <Card className="m-1 p-1">
                <Card.Body>
                  <Form>
                    <Form.Check 
                      checked={filtersSwitch.iphone}
                      onChange={() => changeFiltersSwitch("iphone")}
                      type="switch"
                      id="custom-switch"
                      label="نشان دادن محصولات iphone"
                      />
                    <Form.Check 
                      checked={filtersSwitch.mac}
                      onChange={() => changeFiltersSwitch("mac")}
                      type="switch"
                      id="disabled-custom-switch"
                      label="نشان دادن محصولات mac"
                      />
                    <Form.Check 
                      checked={filtersSwitch.ipad}
                      onChange={() => changeFiltersSwitch("ipad")}
                      type="switch"
                      id="custom-switch"
                      label="نشان دادن محصولات ipad"
                      />
                    <Form.Check 
                      checked={filtersSwitch.appleWatch}
                      onChange={() => changeFiltersSwitch("appleWatch")}
                      type="switch"
                      id="disabled-custom-switch"
                      label="نشان دادن محصولات appleWatch"
                      />
                    <Form.Check 
                      checked={filtersSwitch.airpod}
                      onChange={() => changeFiltersSwitch("airpod")}
                      type="switch"
                      id="custom-switch"
                      label="نشان دادن محصولات airpod"
                      />
                    <Form.Check 
                      checked={filtersSwitch.airtag}
                      onChange={() => changeFiltersSwitch("airtag")}
                      type="switch"
                      id="disabled-custom-switch"
                      label="نشان دادن محصولات airtag"
                    />
                </Form>
                </Card.Body>
              </Card>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Shop