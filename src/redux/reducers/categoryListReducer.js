import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";



const categoryListReducer = (state = initialState, action) => {
  switch (action.type) {       
    case actionTypes.GET_CATEGORIES_SUCCESS:      
      return { ...state, categories : action.payload, isLoading:false}
    case actionTypes.GET_CATEGORIES_ERROR:      
      return { ...state, message: action.payload, isLoading:false}
  
    default:
      return state;
  }
}

export default categoryListReducer;