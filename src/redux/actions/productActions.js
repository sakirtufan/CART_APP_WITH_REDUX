import * as actionTypes from "./actionTypes"
import axios from "axios"

export const getProduct = (id) => dispatch => {
  axios.get(`http://localhost:3000/products/${id}`)
    .then(response =>
      dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: actionTypes.GET_PRODUCT_ERROR, payload: error }))
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

export const removeProductFromList = (id) => dispatch => {
  axios.delete(`http://localhost:3000/products/${id}`)
    .then(response => {
      dispatch({ type: actionTypes.REMOVE_PRODUCT_FROM_LIST, payload: id })
    })
    .catch(error => {
      dispatch({ type: actionTypes.REMOVE_PRODUCT_FROM_LIST_ERROR, payload: error })
    })

}

export const updateProduct = (editProduct, product, push) => dispatch => {
  axios
    .put(`http://localhost:3000/products/${editProduct.id}`, product)
    .then((response) => {
      dispatch({ type: actionTypes.UPDATE_PRODUCT_SUCCESS })
    .then(push(`/`));
    })
    .catch(() => {
      dispatch({ type: actionTypes.UPDATE_PRODUCT_ERROR, payload: "All fields are required" });
    });
}

export const addProduct = (product,push) => dispatch => {
  axios
  .post("http://localhost:3000/products/", product)
  .then((response) => {
    dispatch({ type: actionTypes.UPDATE_PRODUCT_SUCCESS })
    .then(push(`/`));
  })
  .catch(() => {
    dispatch({ type: actionTypes.UPDATE_PRODUCT_ERROR, payload: "All fields are required" });
  });
}