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