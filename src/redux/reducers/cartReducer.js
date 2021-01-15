import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //Check if the product we want to add is already in the cart    
      let addedItem = state.find(cartItem => cartItem.product.id === action.payload.product.id);
      if (addedItem) {
        let newState = state.map(cartItem => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 })
          }
          return cartItem;
        })
        return newState;
      } else {
        return [...state, { ...action.payload }]
      }
    case actionTypes.REMOVE_FROM_CART:
      let newCart = state.filter(cartItem => cartItem.product.id !== action.payload.id)
      return newCart;
    default:
      return state;
  }
}

export default cartReducer;