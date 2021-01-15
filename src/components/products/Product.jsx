import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

const Product = (props) => {

  const addToCart = (product) => {
    props.addToCart({quantity:1,product})
    alertify.notify(`${product.productName} added to cart`)
  }


  return (
    <tr>
      <th scope="row">{props.product.id}</th>
      <td>{props.product.productName}</td>
      <td>{props.product.unitPrice}</td>
      <td>{props.product.quantityPerUnit}</td>
      <td>{props.product.unitsInStock}</td>
      <td>
        <button onClick={()=>addToCart(props.product)} className="btn btn-outline-secondary">
          <MdAddShoppingCart />
        </button>
      </td>
    </tr>
  );
};

const mapStateToProps = (state) => {

  return {
    cart: state.cartReducer,
  };
};

export default connect(mapStateToProps, { addToCart })(Product);
