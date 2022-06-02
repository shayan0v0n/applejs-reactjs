import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { CategoriesReducer, SingleCategoryReducer } from "./reducers/Reducers"

const initalState = {}
const middleware = [thunk]
const reducers = combineReducers({
    categories: CategoriesReducer,
    singleCategory: SingleCategoryReducer
})

const store = createStore(reducers, initalState, applyMiddleware(...middleware));
export default store;