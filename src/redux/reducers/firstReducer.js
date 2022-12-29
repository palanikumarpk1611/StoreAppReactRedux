import {ActionType} from '../action_types/actionTypes'

const intialState = {
  products: [],
};

export const productReducer = (state = intialState, { type, payload }) => {
	// console.log('product Reducer');
  switch (type) {
    case ActionType.POST_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  // console.log('selected Product reducer');
  switch (type) {
    case ActionType.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionType.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};




























/*
const initialState = {
	products : [],
}

export const productReducer = (state=initialState, action)=>{

	switch(action.type){

		case ActionType.POST_PRODUCTS:
			return {...state, products:action.payload};
			break;

		case ActionType.SELECTED_PRODUCT:
			return {...state, selectedProduct:action.payload};
			break;

		default:
			return state;
			break;


	}
}

export const selectedProductReducer = (state={}, action)=>{

	switch(action.type){

		case ActionType.SELECTED_PRODUCT:
			return {...state, products:action.payload};
			break;

		case ActionType.REMOVE_SELECTED_PRODUCT:
			return {};
			break;

		default:
			return state;
			break;


	}
}*/