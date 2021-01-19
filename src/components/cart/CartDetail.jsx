import React from "react";
import { MdDeleteForever, MdRemoveShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { removeFromCart } from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

const CartDetail = () => {
  
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const deleteFromCart = (product) => {
    dispatch(removeFromCart(product));
    alertify.error(`${product.productName} removed from cart`);
  };
  return (
    <div>
      <Table dark className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>
              <MdRemoveShoppingCart size="3em" />
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <th scope="row">{cartItem.product.id}</th>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <button onClick={() => deleteFromCart(cartItem.product)} className="btn btn-danger">
                  <MdDeleteForever                   
                    size="1.5em"
                  ></MdDeleteForever>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CartDetail;
