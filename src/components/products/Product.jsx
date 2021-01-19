import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { connect, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { removeProductFromList } from '../../redux/actions/productActions'
import alertify from "alertifyjs";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

const Product = (props) => {

  const dispatch = useDispatch()  

  const addToCart = (product) => {
    props.addToCart({quantity:1,product})
    alertify.notify(`${product.productName} added to cart`)
  }

  const onHandleDelete = (product) => {
    dispatch(removeProductFromList(product.id))
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
      <td>
        <Link to={`/products/${props.product.id} `} className="btn btn-outline-primary"><BiEdit/></Link>
      </td>
      <td>
        <button onClick={() => {onHandleDelete(props.product)}} className="btn btn-outline-danger"><BiTrash/></button>
      </td>
    </tr>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
  };
};

export default connect(mapStateToProps, { addToCart})(Product);
