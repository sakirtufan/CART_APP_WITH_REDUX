import React, { useEffect, useState } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const PRODUCT_INITIAL_STATE = {
  productName: "",
  categoryId: "",
  unitPrice: "",
  quantityPerUnit: "",
  unitsInStock: "",
};

const ProductForm = (props) => {
  const options = [
    { id: 1, categoryName: "Beverages" },
    { id: 2, categoryName: "Condiments" },
    { id: 3, categoryName: "Confections" },
    { id: 4, categoryName: "Dairy Products" },
    { id: 5, categoryName: "Grains/Cereals" },
    { id: 6, categoryName: "Meat/Poultry" },
    { id: 7, categoryName: "Produce" },
    { id: 8, categoryName: "Seafood" },
  ];

  const [product, setProduct] = useState(PRODUCT_INITIAL_STATE);
  const [error, setError] = useState("");
  const history = useHistory();

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (props.editProduct?.productName) {
      axios.put(`http://localhost:3000/products/${props.editProduct.id}`,product)
      .then(response =>{
        history.push(`/`);
      })
      .catch((err) => {
        setError("All fields are required");
      });
    } else {
      axios
        .post("http://localhost:3000/products/", product)
        .then((response) => {
          history.push("/");
        })
        .catch((err) => {
          setError("All fields are required");
        });
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
        {error && (
          <div class="alert alert-danger" role="alert">
            {error}
          </div>
        )}

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
