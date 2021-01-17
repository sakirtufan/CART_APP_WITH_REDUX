import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCategories, changeCategory } from "../../redux/actions/categoryActions";
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'
import { getProducts } from "../../redux/actions/productActions";

const CategoryList = (props) => {

  useEffect(() => {
    props.getCategories();
  }, []);

  const selectCategory = category => {
    props.changeCategory(category);
    props.getProducts(category.id)
  } 


  return (
    <div>
      <h3><Badge color='warning'>Categories</Badge></h3>

      {props.isLoading ? (
        <p>
          <img
            src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
            alt="Loading..."
          />
        </p>
      ) : (
        <ListGroup>
          {props.categories.map((category) => (
            <ListGroupItem active={category.id === props.currentCategory.id} onClick={() => selectCategory(category)} key={category.id}>{category.categoryName}</ListGroupItem>
          ))}
        </ListGroup>
        
      )}     
    </div>
  );
};

const mapStateToProps = (state) => {
  
  return {
    currentCategory: state.changeCategoryReducer.currentCategory,
    categories: state.categoryListReducer.categories,
    isLoading: state.categoryListReducer.isLoading,
    message: state.categoryListReducer.message,
  };
};

export default connect(mapStateToProps, { changeCategory, getCategories, getProducts })(
  CategoryList
);
