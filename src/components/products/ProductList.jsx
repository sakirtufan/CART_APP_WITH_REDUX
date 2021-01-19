import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Table } from "reactstrap";
import { getProducts } from "../../redux/actions/productActions";
import Product from "../../components/products/Product";

const ProductList = (props) => {
  const currentCategory = useSelector(
    (state) => state.changeCategoryReducer.currentCategory
  );
  const products = useSelector((state) => state.productListReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h3>
        <Badge color="warning">Products</Badge>
        <Badge color="success">{currentCategory.categoryName}</Badge>
      </h3>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
            <th>Units In Stock</th>
            <th>Add to Cart</th>
            <th>Edit Product</th>
            <th>Delete Product</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
