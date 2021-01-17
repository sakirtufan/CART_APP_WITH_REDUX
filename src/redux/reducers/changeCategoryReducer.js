import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

const changeCategoryReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.CHANGE_CATEGORY:
      return {...state, currentCategory: action.payload};       
  
    default:
     return state;
  }
}

export default changeCategoryReducer;