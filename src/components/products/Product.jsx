import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { removeProductFromList } from "../../redux/actions/productActions";
import alertify from "alertifyjs";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const addProductToCart = (product) => {
    dispatch(addToCart({ quantity: 1, product }));
    alertify.notify(`${product.productName} added to cart`);
  };

  const onHandleDelete = (product) => {
    dispatch(removeProductFromList(product.id));
    alertify.error(`${product.productName} removed from product list`);
    history.push("/");
  };

  return (
    <tr>
      <th scope="row">{product.id}</th>
      <td>{product.productName}</td>
      <td>{product.unitPrice}</td>
      <td>{product.quantityPerUnit}</td>
      <td>{product.unitsInStock}</td>
      <td>
        <button
          onClick={() => addProductToCart(product)}
          className="btn btn-outline-secondary"
        >
          <MdAddShoppingCart />
        </button>
      </td>
      <td>
        <Link
          to={`/products/${product.id} `}
          className="btn btn-outline-primary"
        >
          <BiEdit />
        </Link>
      </td>
      <td>
        <button
          onClick={() => {
            onHandleDelete(product);
          }}
          className="btn btn-outline-danger"
        >
          <BiTrash />
        </button>
      </td>
    </tr>
  );
};

export default Product;
