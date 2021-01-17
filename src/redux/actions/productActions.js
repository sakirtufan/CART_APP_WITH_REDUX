import * as actionTypes from "./actionTypes"
import axios from "axios"



export const getProducts = (categoryId) => dispatch => {
  let url = "http://localhost:3000/products"
  if (categoryId) {
    url += "?categoryId=" + categoryId
  }
  axios.get(url)
    .then(response =>
      dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: actionTypes.GET_PRODUCTS_ERROR, payload: error }))

}