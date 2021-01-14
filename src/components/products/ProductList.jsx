import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Badge,Table } from "reactstrap";
import { getProducts } from "../../redux/actions/productActions";

const ProductList = (props) => {

  useEffect(() => {
    props.getProducts();
  }, []);

  return (
    <div>
      <h3>
        <Badge color="warning">Products</Badge>
        <Badge color="success">{props.currentCategory.categoryName}</Badge>
      </h3>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
            <th>Units In Stock</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (            
            <tr key={product.id}>              
              <th scope="row">{product.id}</th>
              <td>{product.productName}</td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentCategory: state.changeCategoryReducer,
    isLoading: state.productListReducer.currentCategory.isLoading,
    message: state.productListReducer.currentCategory.message,
    products: state.productListReducer.products,
  };
};

export default connect(mapStateToProps, { getProducts })(ProductList);
