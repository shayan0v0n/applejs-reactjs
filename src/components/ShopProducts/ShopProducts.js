import React, { useEffect, useState } from 'react'
import { allProductsAction } from '../../actions/Actions'
import { useDispatch, useSelector } from 'react-redux'
import './ShopProducts.scss'
import ShopProductsCard from './ShopProductsCard/ShopProductsCard'
import Loading from '../loading/Loading'
import ShowProducts from '../../components/ShowProducts/ShowProducts'
import CustomModal from '../CustomModal/CustomModal'

const ShopProducts = props => {
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
    useEffect(() => {
      dispatch(allProductsAction())
    }, [])
    let allProducts = useSelector(state => state.allProducts)
    let allProductsData = allProducts.products
    if (!allProducts.loading) {
        let prevState = allProductsData
        prevState = !props.filterStatus["iphone"] ? prevState.filter(item => !item.category.includes("iphone")) : prevState;
        prevState = !props.filterStatus["mac"] ? prevState.filter(item => !item.category.includes("mac")) : prevState;
        prevState = !props.filterStatus["ipad"] ? prevState.filter(item => !item.category.includes("ipad")) : prevState;
        prevState = !props.filterStatus["appleWatch"] ? prevState.filter(item => !item.category.includes("appleWatch")) : prevState;
        prevState = !props.filterStatus["airpod"] ? prevState.filter(item => !item.category.includes("airpod")) : prevState;
        prevState = !props.filterStatus["airtag"] ? prevState.filter(item => !item.category.includes("airtag")) : prevState;
        allProductsData = prevState
    }

    return (
    <div>
        <ShowProducts show={show} handleClose={handleClose} loginErrorModalOpen={loginErrorModalOpen} addToCartSuccessOpen={addToCartSuccessOpen} currentProduct={currentProduct} />
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
        {!allProducts.loading ? (
            allProductsData.map(item => (
                <ShopProductsCard key={item.id} cardData={item} handleShow={handleShow} />
            ))
        ) : (
            <>
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
            </>
        )}
    </div>
  )
}

export default ShopProducts;