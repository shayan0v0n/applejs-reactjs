import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { CategoriesReducer, SingleCategoryReducer, allProductsReducer } from "./reducers/Reducers"

const initalState = {}
const middleware = [thunk]
const reducers = combineReducers({
    categories: CategoriesReducer,
    singleCategory: SingleCategoryReducer,
    allProducts: allProductsReducer
})

const store = createStore(reducers, initalState, applyMiddleware(...middleware));
export default store;