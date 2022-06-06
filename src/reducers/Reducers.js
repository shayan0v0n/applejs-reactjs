export const CategoriesReducer = (state = {categories: []}, action) => {
    switch(action.type) {
        case "CATEGORIES_REQ_ERR":
            return { loading: false, error: true, categories: [] }
        case "CATEGORIES_REQ_LOAD":
            return { loading: true, error: false, categories: [] }
        case "CATEGORIES_REQ_SUCCESS":
            return { loading: false, error: false, categories: action.payload }
        default:
            return state
    }
}

export const SingleCategoryReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case "PRODUCTS_REQ_ERR":
            return { loading: false, error: true, products: [] }
        case "PRODUCTS_REQ_LOAD":
            return { loading: true, error: false, products: [] }
        case "PRODUCTS_REQ_SUCCESS":
            return { loading: false, error: false, products: action.payload }
        default:
            return state
    }
}

export const allProductsReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case "PRODUCTS_REQ_ERR":
            return { loading: false, error: true, products: [] }
        case "PRODUCTS_REQ_LOAD":
            return { loading: true, error: false, products: [] }
        case "PRODUCTS_REQ_SUCCESS":
            return { loading: false, error: false, products: action.payload }
        default:
            return state
    }
}