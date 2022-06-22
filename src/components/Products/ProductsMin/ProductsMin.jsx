import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../../context/ProductContext/ProductState'

function ProductsMin({ name, price, description, image, id }) {

  const { setProduct, addCart, cart } = useContext(ProductContext)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleLinkClick = () => {
    setProduct({ name, price, description, image, id })
  }

  return (
    <div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{description}</div>
      <div>{image}</div>
      <Link onClick={handleLinkClick} to={"/product/" + id}>Go to product</Link>
      <button onClick={() => {addCart(id)}}>
        Add to cart
      </button>
    </div>
  )
}

export default ProductsMin