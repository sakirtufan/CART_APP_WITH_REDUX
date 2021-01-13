import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getCategories,
  changeCategory,
} from "../../redux/actions/categoryActions";
import { ListGroup, ListGroupItem } from 'reactstrap'

const CategoryList = (props) => {
  useEffect(() => {
    props.getCategories();
  }, []);

  return (
    <div>
      <h3>Categories</h3>

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
            <ListGroupItem key={category.id}>{category.categoryName}</ListGroupItem>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer.categories,
    isLoading: state.categoryListReducer.isLoading,
    message: state.categoryListReducer.message,
  };
};

export default connect(mapStateToProps, { changeCategory, getCategories })(
  CategoryList
);
