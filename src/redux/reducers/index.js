import { combineReducers } from 'redux'
import changeCategoryReducer from './changeCategoryReducer'
import categoryListReducer from './categoryListReducer'
import productListReducer from './productListReducer'
import cartReducer from './cartReducer'
import addProductReducer from './addProductReducer'
import editProductReducer from './editProductReducer'

const rootReducer = combineReducers({
  changeCategoryReducer, 
  categoryListReducer,
  productListReducer,
  cartReducer,
  addProductReducer,
  editProductReducer,
})

export default rootReducer;