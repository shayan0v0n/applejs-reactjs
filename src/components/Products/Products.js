import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Nav } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { singleCategoryAction } from '../../actions/Actions';
import Loading from '../../components/loading/Loading';
import ShowProducts from '../../components/ShowProducts/ShowProducts'
import ProductsCard from '../../components/ProductsCard/ProductsCard';
import CustomModal from '../CustomModal/CustomModal';

const Products = props => {
    const [show, setShow] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});
    const [loginErrorModal, setLoginErrorModal] = useState(false);
    const [addToCartSuccess, setAddToCartSuccess] = useState(false)
    const addToCartSuccessClose = () => setAddToCartSuccess(false)
    const addToCartSuccessOpen = () => setAddToCartSuccess(true)
    const loginErrorModalClose = () => setLoginErrorModal(false)
    const loginErrorModalOpen = () => setLoginErrorModal(true)
    const handleClose = () => setShow(false);
    const handleShow = (current) => {
        setShow(true);
        setCurrentProduct(current)
    };
    const dispatch = useDispatch();
    const [tabActive, setTabActive] = useState("allProduct");
    useEffect(() => {
        dispatch(singleCategoryAction(props.dataPath))
    }, [])
    const products = useSelector(state => state.singleCategory);
    const handleSelect = (eventKey) => setTabActive(eventKey);
    
    let productShowing = null;
    if (tabActive === "popularProduct") {
        const filteredByPopular = products.products.filter(item => item.category.includes("popular"));
        productShowing = (
            <div>
                <Row className="m-3">
                    {filteredByPopular.map(item => (
                        <Col sm="12" md="6" lg="4" className="p-2" key={item.id}>
                            <ProductsCard item={item} handleShow={handleShow} />
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }else if(tabActive === "saleProduct") {
        const filteredByPopular = products.products.filter(item => item.category.includes("sale"));
        productShowing = (
            <div>
                <Row className="m-3">
                    {filteredByPopular.map(item => (
                        <Col sm="12" md="6" lg="4" className="p-2">
                            <ProductsCard item={item}  handleShow={handleShow} />
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }else {
        const filteredByPopular = products.products.filter(item => item.category.includes("product"));
        productShowing = (
            <div>
                <Row className="m-3">
                    {filteredByPopular.map(item => (
                        <Col sm="12" md="6" lg="4" className="p-2">
                            <ProductsCard item={item}  handleShow={handleShow} />
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }

  return (
    <Container>
    <ShowProducts show={show} handleClose={handleClose} currentProduct={currentProduct} addToCartSuccessOpen={addToCartSuccessOpen} loginErrorModalOpen={loginErrorModalOpen} />
    <CustomModal
         show={loginErrorModal}
         closeHandler={loginErrorModalClose}
         image="undraw_secure_login_pdn4"
         title="لطفا اول ثبت نام کنید"
         extraText="قبل این که محصول را به سبد خرید اضافه کنید، ثبت نام کنید" />
    <CustomModal
    show={addToCartSuccess}
    closeHandler={addToCartSuccessClose}
    image="undraw_add_files_re_v09g"
    title="محصول شما اضافه شد"
    extraText="محصول شما با موفقیت به سبد خرید اضافه شد" />
    <Nav justify variant="tabs" onSelect={handleSelect} defaultActiveKey="allProduct">
        <Nav.Item>
            <Nav.Link eventKey="saleProduct">محصولات حراج</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="popularProduct">محصولات پرفروش</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="allProduct">همه محصولات</Nav.Link>
        </Nav.Item>
    </Nav>
    <div className="p-3">
        {!products.loading ? (
            productShowing
        ) : (
            <Row>
                <Col sm="12" md="4">
                    <Loading />
                </Col>
                <Col sm="12" md="4">
                    <Loading />
                </Col>
                <Col sm="12" md="4">
                    <Loading />
                </Col>
            </Row>
        )}
    </div>
    </Container>
  )
}

export default Products