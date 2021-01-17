import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

import axios from "axios";

const PRODUCT_INITIAL_STATE = {
  productName:'',categoryId:'',unitPrice:'',quantityPerUnit:'',unitsInStock:''
}

const ProductForm = (props) => {  

  const [product,setProduct] = useState(PRODUCT_INITIAL_STATE)

  const onInputChange = (e) => {
    setProduct({...product, [e.target.name]:e.target.value})
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/products/",product)
    .then((response) => {
      console.log(response);            
    })
  }

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
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="category">Category</Label>
              <Input  onChange={onInputChange} value={product.categoryId} type="select" name="categoryId" id="categoryId">
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
              <Input  onChange={onInputChange} value={product.unitPrice} type="text" name="unitPrice" id="unitPrice" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="quantityPerUnit">Quantity Per Unit</Label>
              <Input  onChange={onInputChange} value={product.quantityPerUnit} type="text" name="quantityPerUnit" id="quantityPerUnit" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="unitsInStock">Units in Stock</Label>
              <Input  onChange={onInputChange} value={product.unitsInStock} type="text" name="unitsInStock" id="unitsInStock" />
            </FormGroup>
          </Col>
        </Row>
        <Button color='success'>Save</Button>
        <Button color='danger'>Discard</Button>
        <Link to="/">Home</Link>
      </Form>
    </div>
  );
};




export default ProductForm;
