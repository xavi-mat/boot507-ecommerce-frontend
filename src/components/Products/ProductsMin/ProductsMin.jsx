import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../../../context/ProductsContext/ProductsState';
import ProductImage from '../ProductImage/ProductImage';

function ProductsMin({ name, price, description, image, id }) {

  const { addToCart, cart } = useContext(ProductsContext)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{description}</div>
      <div>{image}</div>
      <ProductImage image={image} />
      <Link to={"/product/" + id}>Go to product</Link>
      <button onClick={() => { addToCart({name,price,description,image,id}) }}>
        Add to cart
      </button>
    </div>
  )
}

export default ProductsMin