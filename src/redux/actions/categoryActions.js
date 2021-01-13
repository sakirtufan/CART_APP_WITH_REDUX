import * as actionTypes from "./actionTypes"
import axios from "axios"


export const changeCategory = (categoryName) => {
  return { type: actionTypes.CHANGE_CATEGORY, payload: categoryName }
}

export const getCategories = () => dispatch => {  
  dispatch({ type:actionTypes.GET_CATEGORIES_START});
  axios.get("http://localhost:3000/categories")
    .then(response =>      
      dispatch({ type: actionTypes.GET_CATEGORIES_SUCCESS, payload:response.data }))
    .catch(error => dispatch({ type: actionTypes.GET_CATEGORIES_ERROR, payload:error }))
  
}

