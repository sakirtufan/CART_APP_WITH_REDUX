import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../redux/actions/productActions";
import ProductForm from "./ProductForm";

const EditProduct = (props) => {
  const { id } = useParams();
  const editProduct = useSelector(
    (state) => state.productListReducer.editProduct
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      <h3 className="text-center m-5">Edit The Product</h3>
      <ProductForm editProduct={editProduct} />
    </div>
  );
};

export default EditProduct;
