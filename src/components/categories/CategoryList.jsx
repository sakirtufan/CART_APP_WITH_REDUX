import React from 'react'
import { connect } from 'react-redux';

const CategoryList = (props) => {
  return (
    <div>
      <h3>Category List</h3>
      <h5>CurrentCategory: {props.currentCategory.categoryName}</h5>
    </div>
  )
}


function mapStateToProps(state){
  return {
    currentCategory : state.changeCategoryReducer
  }
}


export default connect(mapStateToProps)(CategoryList) ;