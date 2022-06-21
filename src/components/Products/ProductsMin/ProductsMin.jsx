import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../../context/ProductContext/ProductState'
import { UserContext } from '../../../context/UserContext/UserState'

function ProductsMin({ name, price, description, image, id }) {

  const { setProduct, addCart } = useContext(ProductContext)
  const { user } = useContext(UserContext);

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
      {
        user ?
          (<button onClick={() => addCart({ name, price, description, image, id })}>
            Add to cart
          </button>)
          : null
      }
    </div>
  )
}

export default ProductsMin