import React from "react";
import { connect } from "react-redux";
import { FaOpencart } from "react-icons/fa";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import { removeFromCart } from "../../redux/actions/cartActions";
import { MdDeleteForever } from "react-icons/md";

const CartSummary = (props) => {
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
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart
        </DropdownToggle>
        <DropdownMenu right>
          {props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <button type="button" className="btn btn-outline-secondary">
                {cartItem.product.productName}{" "}
                <span className="badge badge-dark">{cartItem.quantity}</span>
              </button>
              <MdDeleteForever onClick={() => props.removeFromCart(cartItem.product)} size="1.5em" color="red"></MdDeleteForever>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>Go to cart</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };
  return <div>{props.cart.length > 0 ? renderSummary() : renderEmpty()}</div>;
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer,
  };
};

export default connect(mapStateToProps, { removeFromCart })(CartSummary);
