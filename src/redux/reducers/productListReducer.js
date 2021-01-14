import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";


const productListReducer = (state = initialState, action) => {
  switch (action.type) {  
    
    case actionTypes.GET_PRODUCTS_SUCCESS:      
      return { ...initialState, products : action.payload, isLoading:false}
    case actionTypes.GET_PRODUCTS_ERROR:      
      return { ...initialState, message: action.payload, isLoading:false}
  
    default:
      return state;
  }
}

export default productListReducer;