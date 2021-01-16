import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";


const addProductReducer = (state = initialState.savedProduct, action) => {
  switch (action.type) {      
    case actionTypes.CREATE_PRODUCT_SUCCESS:      
      return action.payload;   
    default:
      return state;
  }
}

export default addProductReducer;