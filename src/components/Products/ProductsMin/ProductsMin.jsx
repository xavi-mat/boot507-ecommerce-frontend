import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../../../context/ProductsContext/ProductsState';
import ProductImage from '../ProductImage/ProductImage';
import { Button, Card, Row, Space } from 'antd';
const { Meta } = Card;


function ProductsMin({ name, price, description, image, id }) {

  const { addToCart, cart } = useContext(ProductsContext)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      {/* <Link to={"/product/" + id}>
        <div>
          <Card
            hoverable
            style={{
              width: 240,
              height: 510
            }}
            cover={<ProductImage image={image} />}
          >
            <Meta title={name} description={description} />
            <br />
            <Row justify='space-between'>
              <h3>{price} €</h3>
              <Button
                type="primary"
                onClick={() => { addToCart({ name, price, description, image, id }) }}
              >
                Add to cart
              </Button>
            </Row>
          </Card>
        </div>
      </Link> */}

      <Card>
        <Link to={"/product/" + id}>
          <Card
            hoverable
            style={{
              width: 240,
              height: 480,
            }}
            cover={<ProductImage image={image} />}
          >
            <Meta title={name} description={description} />
          </Card>
        </Link>
        <br />
        <Row justify='space-between'>
          <h3>{price} €</h3>
          <Button
            type="primary"
            onClick={() => { addToCart({ name, price, description, image, id }) }}
          >
            Add to cart
          </Button>
        </Row>
      </Card>
    </>
  )
}

export default ProductsMin