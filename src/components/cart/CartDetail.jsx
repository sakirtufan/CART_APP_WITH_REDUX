import React from "react";
import { MdDeleteForever, MdRemoveShoppingCart } from "react-icons/md";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { removeFromCart } from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

const CartDetail = (props) => {

  const removeFromCart = (product) => {
    props.removeFromCart(product);
    alertify.error(`${product.productName} removed from cart`)
  }
  return (
    <div>
      <Table dark className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th><MdRemoveShoppingCart size="2em"/></th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <th scope="row">{cartItem.product.id}</th>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.quantity}</td>
              <td><button className="btn btn-danger"><MdDeleteForever onClick={() => removeFromCart(cartItem.product)} size="1.5em"></MdDeleteForever></button></td>
             
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer,
  };
};

export default connect(mapStateToProps, { removeFromCart })(CartDetail);
