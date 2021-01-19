import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";


const productListReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, isLoading: false }
    case actionTypes.REMOVE_PRODUCT_FROM_LIST:
      return {
        ...state, products: state.products.filter((product) => {
          return (product.id !== action.payload)
        }),deleteProductError:''
      }
    case actionTypes.REMOVE_PRODUCT_FROM_LIST_ERROR:
      return { ...state,deleteProductError: action.payload}
    case actionTypes.GET_PRODUCT_SUCCESS:
      return { ...state, editProduct:{...state.editProduct, ...action.payload}}
    default:
      return state;
  }
}



export default productListReducer;