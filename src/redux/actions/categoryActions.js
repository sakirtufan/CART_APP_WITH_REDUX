import * as actionTypes from "./actionTypes"

export const change_category = (category) => {
  return { type: actionTypes.CHANGE_CATEGORY, payload:category}
}