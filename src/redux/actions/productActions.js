import * as actionTypes from "./actionTypes"
import axios from "axios"

export const addProduct = (product) => dispatch => {
  axios.post("http://localhost:3000/products/",product)
  .then((response) => {
    dispatch({ type: actionTypes.CREATE_PRODUCT_SUCCESS,payload: response.data})
  })
  .catch((error) => {
    dispatch({ type: actionTypes.CREATE_PRODUCT_ERROR, payload: error })
  });
}

export const editProduct = (product) => dispatch => {
  
  axios.put(`http://localhost:3000/products/${product.id}`, product)
    .then((response) => {
      dispatch({ type:actionTypes.UPDATE_PRODUCT_SUCCESS,payload: response.data})      
    })
    .catch((error) => {
      dispatch({ type:actionTypes.UPDATE_PRODUCT_ERROR, payload:error });
    });
}



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