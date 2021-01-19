import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCartArrowDown, FaOpencart } from "react-icons/fa";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import { removeFromCart } from "../../redux/actions/cartActions";

const CartSummary = (props) => {

  const cart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch();

  const renderEmpty = () => {
    return (
      <NavItem className="pr-3">
        <NavLink>
          <FaOpencart size="2em" color="red"></FaOpencart>
        </NavLink>
      </NavItem>
    );
  };

  const renderSummary = () => {
    const deleteFromCart = (product) => {
      dispatch(removeFromCart(product));
      alertify.error(`${product.productName} removed from cart`);
    };
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <FaCartArrowDown size="2em" color="green" />
        </DropdownToggle>
        <DropdownMenu right>
          {cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <button type="button" className="btn btn-outline-secondary">
                {cartItem.product.productName}{" "}
                <span className="badge badge-dark">{cartItem.quantity}</span>
              </button>
              <MdDeleteForever
                onClick={() => deleteFromCart(cartItem.product)}
                size="1.5em"
                color="red"
              ></MdDeleteForever>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to="/cart">Go to cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  return <div>{cart.length > 0 ? renderSummary() : renderEmpty()}</div>;
};


export default CartSummary;
