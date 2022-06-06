import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { allProductsAction } from '../../actions/Actions'
import Loading from '../loading/Loading'
import CategoriesCards from './CategoriesCards/CategoriesCards'
import ShowProducts from '../ShowProducts/ShowProducts'
import './CategoriesProducts.scss'

const CategoriesProducts = props => {
    const [show, setShow] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (current) => {
        setShow(true);
        setCurrentProduct(current)
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allProductsAction());
    }, [])
    const products = useSelector(state => state.allProducts)
    const filteredByPopular = products.products.filter(item => item.category.includes(props.category));

  return (
    <div className='p-5'>
        <h2 className="text-center pb-1">پرطرفدترین محصولات</h2>
        <ShowProducts show={show} handleClose={handleClose} currentProduct={currentProduct} />
        <Container>
            {!products.loading ? (
                <Row>
                    {filteredByPopular.map(item => (
                        <Col sm="12" md="6" lg="4">
                            <CategoriesCards item={item} handleShow={handleShow} />
                        </Col>
                    ))}
                </Row>
            ) : (
                <>
                <Row className="m-2">
                    <Col sm="12" md="6" lg="4">
                        <Loading />
                    </Col>
                    <Col sm="12" md="6" lg="4">
                        <Loading />
                    </Col>
                    <Col sm="12" md="6" lg="4">
                        <Loading />
                    </Col>
                </Row>
                <Row className="m-2">
                    <Col sm="12" md="6" lg="4">
                        <Loading />
                    </Col>
                    <Col sm="12" md="6" lg="4">
                        <Loading />
                    </Col>
                    <Col sm="12" md="6" lg="4">
                        <Loading />
                    </Col>
                </Row>
                </>
            )}
        </Container>
    </div>
  )
}

export default CategoriesProducts