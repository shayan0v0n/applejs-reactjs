import React, { useEffect } from 'react'
import './ProductCategory.scss'
import CategoryCard from './CategoryCard/CategoryCard'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { categoriesAction } from "../../actions/Actions"
import Loading from '../loading/Loading'

const ProductCategory = () => {
    const dispatch = useDispatch();
    const categoriesData = useSelector(state => state.categories);
    useEffect(() => {
        dispatch(categoriesAction());
    }, [dispatch])

    const categoryOne = [
        categoriesData.categories.airpad,
        categoriesData.categories.mac,
        categoriesData.categories.ipad
    ]

    const categoryTwo = [
        categoriesData.categories.appleWatch,
        categoriesData.categories.iphone,
        categoriesData.categories.airtag
    ]

  return (
        <div className="p-5">
            { !categoriesData.Loading ? (
                <Container>
                    <h2 className="text-center">دسته بندی محصولات</h2>
                    <Carousel className="carousel-category">
                        <Carousel.Item>
                            <Row>
                                {categoryOne.map((item, index) => (
                                    <Col sm="12" md="4" key={index}>
                                        <CategoryCard cardData={item} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {categoryTwo.map((item, index) => (
                                    <Col sm="12" md="4" key={index}>
                                        <CategoryCard cardData={item} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            ) : <Loading /> }
        </div>
  )
}

export default ProductCategory