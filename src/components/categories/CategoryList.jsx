import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  changeCategory,
} from "../../redux/actions/categoryActions";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";
import { getProducts } from "../../redux/actions/productActions";

const CategoryList = (props) => {
  const currentCategory = useSelector(
    (state) => state.changeCategoryReducer.currentCategory
  );
  const categories = useSelector(
    (state) => state.categoryListReducer.categories
  );
  const isLoading = useSelector((state) => state.categoryListReducer.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const selectCategory = (category) => {
    dispatch(changeCategory(category));
    dispatch(getProducts(category.id));
  };

  return (
    <div>
      <h3>
        <Badge color="warning" className="w-100 p-3">Categories</Badge>
      </h3>

      {isLoading ? (
        <p>
          <img
            src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
            alt="Loading..."
          />
        </p>
      ) : (
        <ListGroup>
          {categories.map((category) => (
            <ListGroupItem
              active={category.id === currentCategory.id}
              onClick={() => selectCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default CategoryList;
