import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'
import FormReview from './FormReview/FormReview'
import { UserContext } from '../../context/UserContext/UserState'
import ProductImage from '../Products/ProductImage/ProductImage'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { Button, Col, Descriptions, Rate, Row } from 'antd'
import Review from './Review/Review'

function Product() {

  const emptyProduct = {
    name: "", price: null, description: "", image: ""
  }

  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [prod, setProd] = useState(emptyProduct);
  const { user } = useContext(UserContext);
  const { cart, addToCart, getProductById } = useContext(ProductsContext);
  const navigate = useNavigate();

  async function getProduct(id) {
    try {
      const theProd = await getProductById(id);
      if (theProd) {
        setProd(theProd);
      } else {
        navigate("/products");
      }
    } catch (error) {
      console.log(error)
    }
  }
  async function getReviews() {
    const res = await axios.get("http://localhost:8080/reviews/product/" + id);
    setReviews(res.data.result)
  };

  useEffect(() => {
    getProduct(id);
    getReviews();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  let canReview = true;
  let stars = { total: 0, count: 0, average: -1 }
  const review = reviews.map((r, i) => {
    const userIsAuthor = r.UserId === user?.id
    canReview = canReview && !userIsAuthor;
    stars.count++;
    stars.total += r.stars;
    return (<Review key={i} review={r} userIsAuthor={userIsAuthor} />)
  }
  );

  if (stars.count) {
    stars.average = stars.total / stars.count;
  }

  return (
    <div style={{ padding: "0 2rem" }}>
      <Row>
        <Col sm={10}>
          <ProductImage image={prod.image} width="100%" />
        </Col>
        <Col sm={14}>
          <Descriptions
            title={prod.name}
            column={{ xxl: 4, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
            bordered
          >
            <Descriptions.Item>{prod.price} €</Descriptions.Item>
            <Descriptions.Item>
              {stars.average > -1 ? <Rate disabled allowHalf defaultValue={stars.average} /> : "No valorations yet"}
            </Descriptions.Item>
            <Descriptions.Item>
              <Button type='primary' onClick={() => addToCart(prod)}>Add to cart</Button>
            </Descriptions.Item>
          </Descriptions>
          <Descriptions bordered>
            <Descriptions.Item>{prod.description}</Descriptions.Item>
          </Descriptions>
          <div style={{ marginTop: "2rem" }}>
            <h2>Customer reviews</h2>
            <div>
              {user && canReview ?
                <FormReview id={id} getReviews={getReviews} />
                : null}
            </div>
          </div>
          <div>{review}</div>
        </Col>
      </Row>
    </div>
  );
};

export default Product;