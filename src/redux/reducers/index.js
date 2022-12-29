import {productReducer,selectedProductReducer} from './firstReducer'
import {combineReducers} from 'redux'

export const reducers = combineReducers({
	allProducts : productReducer,
	selectedProduct : selectedProductReducer
})