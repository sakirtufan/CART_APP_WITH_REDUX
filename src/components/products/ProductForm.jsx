import React, { useEffect, useState } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../../redux/actions/productActions";

const PRODUCT = {
  productName: "",
  categoryId: "",
  unitPrice: "",
  quantityPerUnit: "",
  unitsInStock: "",
};

const ProductForm = (props) => {
  const [product, setProduct] = useState(PRODUCT);
  const options = useSelector((state) => state.categoryListReducer.options); 
  const history = useHistory();
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (props.editProduct?.productName) {
      dispatch(updateProduct(props.editProduct, product, history.push));
    } else {
      dispatch(addProduct(product, history.push));
    }
  };

  useEffect(() => {
    if (props.editProduct?.productName && props.editProduct?.categoryId) {
      setProduct(props.editProduct);
    }
  }, [props.editProduct]);

  return (
    <div>
      <Form onSubmit={onFormSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="productName">Product Name</Label>
              <Input
                onChange={onInputChange}
                value={product.productName}
                type="text"
                name="productName"
                id="productName"
                placeholder="Product Name"
                required
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="categoryId">Category</Label>
              <Input
                onChange={onInputChange}
                type="select"
                name="categoryId"
                id="categoryId"
                required
              >
                {" "}
                {options.map((option) => (
                  <option value={option.id} key={option.id}>
                    {option.categoryName}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="unitPrice">Unit Price</Label>
              <Input
                onChange={onInputChange}
                value={product.unitPrice}
                type="text"
                name="unitPrice"
                id="unitPrice"
                required
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="quantityPerUnit">Quantity Per Unit</Label>
              <Input
                onChange={onInputChange}
                value={product.quantityPerUnit}
                type="text"
                name="quantityPerUnit"
                id="quantityPerUnit"
                required
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="unitsInStock">Units in Stock</Label>
              <Input
                onChange={onInputChange}
                value={product.unitsInStock}
                type="text"
                name="unitsInStock"
                id="unitsInStock"
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <Button color="success">Save</Button>
        <Button color="danger">Discard</Button>
      </Form>
    </div>
  );
};

export default ProductForm;
