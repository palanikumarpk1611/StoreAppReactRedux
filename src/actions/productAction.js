import {ActionType} from '../redux/action_types/actionTypes'

export const updateProducts = (products) =>{
	return {
		type : ActionType.POST_PRODUCTS,
		payload : products
	}
}

export const selectedProduct = (product)=>{
	return {
		type : ActionType.SELECTED_PRODUCT,
		payload : product
	}
}

export const removeSelectedProduct = ()=>{
	return {
		type : ActionType.REMOVE_SELECTED_PRODUCT
	}
}

export const cartProducts = (product) =>{
	return {
		type: ActionType.CART_PRODUCTS,
		payload : product
	}
}