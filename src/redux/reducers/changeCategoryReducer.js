import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

const changeCategoryReducer = (state = initialState.currentCategory, action) => {
  switch (action.type) {

    case actionTypes.CHANGE_CATEGORY:
      return {...initialState.currentCategory, categoryName: action.payload};       
  
    default:
     return state;
  }
}

export default changeCategoryReducer;