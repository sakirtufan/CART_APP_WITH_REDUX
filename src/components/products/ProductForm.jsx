import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { addProduct, editProduct } from "../../redux/actions/productActions";

const ProductForm = (props) => {
  const PRODUCT_INITIAL_STATE = {
    productName: "",
    category: "",
    unitPrice: "",
    quantityPerUnit: "",
    unitsInStock: "",
  };

  const [product, setProduct] = useState(PRODUCT_INITIAL_STATE);
  let history = useHistory();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h3 className='text-center m-5'>Add New Product</h3>
      <Form
        onSubmit={(event) => {
          props.handleCommentSubmit(event, product);
          setProduct(PRODUCT_INITIAL_STATE);
          history.push('/')
        }}
      >
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="productName">Product Name</Label>
              <Input
                type="text"
                name="productName"
                id="productName"
                placeholder="Product Name"
                onChange={handleChange}
                value={product.productName}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="category">Category</Label>
              <Input
                value={product.category}
                onChange={handleChange}
                type="select"
                name="category"
                id="category"
              >
                <option>Beverages</option>
                <option>Condiments</option>
                <option>Confections</option>
                <option>Dairy Products</option>
                <option>Grains/Cereals</option>
                <option>Meat/Poultry</option>
                <option>Produce</option>
                <option>Seafood</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="unitPrice">Unit Price</Label>
              <Input
                value={product.unitPrice}
                onChange={handleChange}
                type="text"
                name="unitPrice"
                id="unitPrice"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="quantityPerUnit">Quantity Per Unit</Label>
              <Input
                value={product.quantityPerUnit}
                onChange={handleChange}
                type="text"
                name="quantityPerUnit"
                id="quantityPerUnit"
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="unitsInStock">Units in Stock</Label>
              <Input
                value={product.unitsInStock}
                onChange={handleChange}
                type="text"
                name="unitsInStock"
                id="unitsInStock"
              />
            </FormGroup>
          </Col>
        </Row>
        <Button>Send Product</Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.addProductReducer.savedProduct,
  };
};

export default connect(mapStateToProps, { addProduct, editProduct })(
  ProductForm
);
