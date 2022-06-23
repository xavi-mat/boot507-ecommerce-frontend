import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../../context/ProductContext/ProductState'
import ProductImage from '../ProductImage/ProductImage';
import { Card } from 'antd';
const { Meta } = Card;


function ProductsMin({ name, price, description, image, id }) {

  const { setProduct, addCart, cart } = useContext(ProductContext)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleLinkClick = () => {
    setProduct({ name, price, description, image, id })
  }

  return (



    
    <Link onClick={handleLinkClick} to={"/product/" + id}>
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

          <button onClick={() => { addCart(id) }}>
            Add to cart
          </button>
        </Card>
      </div>
    </Link>
  )
}

export default ProductsMin




