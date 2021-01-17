import React from "react";
import { connect } from "react-redux";
import { FaCartArrowDown, FaOpencart } from "react-icons/fa";
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
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

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
    const removeFromCart = (product) => {
      props.removeFromCart(product);
      alertify.error(`${product.productName} removed from cart`);
    }
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
        <FaCartArrowDown size="2em" color="green"/>
        </DropdownToggle>
        <DropdownMenu right>
          {props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <button type="button" className="btn btn-outline-secondary">
                {cartItem.product.productName}{" "}
                <span className="badge badge-dark">{cartItem.quantity}</span>
              </button>
              <MdDeleteForever onClick={() => removeFromCart(cartItem.product)} size="1.5em" color="red"></MdDeleteForever>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem><Link to="/cart">Go to cart</Link></DropdownItem>
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
