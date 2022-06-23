import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../../../context/ProductsContext/ProductsState';
import ProductImage from '../ProductImage/ProductImage';
import { Card } from 'antd';
const { Meta } = Card;


function ProductsMin({ name, price, description, image, id }) {

  const { addToCart, cart } = useContext(ProductsContext)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Link to={"/product/" + id}>
      <div>
        <Card
          hoverable
          style={{
            width: 240,
            height:480
          }}
          cover={<ProductImage image={image}/>}
        >
          <Meta title={name} price={price} description={description} />
          <br />
          <button onClick={() => { addToCart({name,price,description,image,id}) }}>
            Add to cart
          </button>
        </Card>
      </div>
    </Link>
  )
}

export default ProductsMin