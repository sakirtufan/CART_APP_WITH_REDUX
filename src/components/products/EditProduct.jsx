import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductForm from './ProductForm'

const EditProduct = (props) => {
  
  const { id } = props.match.params;
  const [editProduct,setEditProduct] = useState({})

useEffect(() => {
  axios.get(`http://localhost:3000/products/${id}`)
  .then((response) =>setEditProduct(response.data))
},[])
  
  
  return (
    <div>
       <h3 className="text-center m-5">Edit The Product</h3>
       <ProductForm editProduct={editProduct}/>
    </div>
  )
}

export default EditProduct;