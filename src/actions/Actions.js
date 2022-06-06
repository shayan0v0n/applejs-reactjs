import axios from "axios";

export const categoriesAction = () => async dispatch => {
    try {
        dispatch({ type: "CATEGORIES_REQ_LOAD" })
        const { data } = await axios.get("https://applejs-default-rtdb.firebaseio.com/categories.json");
        dispatch({ type: "CATEGORIES_REQ_SUCCESS", payload: data })
    }catch(err) {
        dispatch({ type: "CATEGORIES_REQ_ERR" })
    }
}

export const singleCategoryAction = id => async dispatch => {
    try {
        dispatch({ type: "PRODUCTS_REQ_LOAD" })
        const { data } = await axios.get(`https://applejs-default-rtdb.firebaseio.com/categories/${id}/0.json`);
        dispatch({ type: "PRODUCTS_REQ_SUCCESS", payload: data })
    }catch(err) {
        dispatch({ type: "PRODUCTS_REQ_ERR" })
    }
}

export const allProductsAction = () => async dispatch => {
    try {
        dispatch({ type: "PRODUCTS_REQ_LOAD" })
        const airpadData = await axios.get(`https://applejs-default-rtdb.firebaseio.com/categories/airpad/0.json`);
        const airtagData = await axios.get(`https://applejs-default-rtdb.firebaseio.com/categories/airtag/0.json`);
        const appleWatchData = await axios.get(`https://applejs-default-rtdb.firebaseio.com/categories/appleWatch/0.json`);
        const ipadData = await axios.get(`https://applejs-default-rtdb.firebaseio.com/categories/ipad/0.json`);
        const iphoneData = await axios.get(`https://applejs-default-rtdb.firebaseio.com/categories/iphone/0.json`);
        const macData = await axios.get(`https://applejs-default-rtdb.firebaseio.com/categories/mac/0.json`);
        const productsData = [
            ...airpadData.data,
            ...airtagData.data,
            ...appleWatchData.data,
            ...ipadData.data,
            ...iphoneData.data,
            ...macData.data
        ]
        dispatch({ type: "PRODUCTS_REQ_SUCCESS", payload: productsData })
    }catch(err) {
        dispatch({ type: "PRODUCTS_REQ_ERR" })
    }
}