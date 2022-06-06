import React, { useEffect, useState } from 'react'
import { allProductsAction } from '../../actions/Actions'
import { useDispatch, useSelector } from 'react-redux'
import './ShopProducts.scss'
import ShopProductsCard from './ShopProductsCard/ShopProductsCard'
import Loading from '../loading/Loading'
import ShowProducts from '../../components/ShowProducts/ShowProducts'

const ShopProducts = props => {
    const [show, setShow] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});
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
        <ShowProducts show={show} handleClose={handleClose} currentProduct={currentProduct} />
        {!allProducts.loading ? (
            allProductsData.map(item => (
                <ShopProductsCard cardData={item} handleShow={handleShow} />
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