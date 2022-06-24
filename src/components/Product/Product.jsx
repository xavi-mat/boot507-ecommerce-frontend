import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import FormReview from './FormReview/FormReview'
import { UserContext } from '../../context/UserContext/UserState'
import ProductImage from '../Products/ProductImage/ProductImage'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { Rate } from 'antd'

function Product() {

  const emptyProduct = {
    name: "", price: null, description: "", image: ""
  }

  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [prod, setProd] = useState(emptyProduct);
  const { user } = useContext(UserContext);
  const { cart, addToCart, getProductById } = useContext(ProductsContext);

  async function getProduct(id) {
    const theProd = await getProductById(id);
    setProd(theProd);
  }
  async function getReviews() {
    const res = await axios.get("http://localhost:8080/reviews/product/" + id);
    setReviews(res.data.result)
  };

  useEffect(() => {
    getProduct(id);
    getReviews();
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
    return (<div key={i} style={userIsAuthor ? { "background": "#FFFFAA" } : {}}>
      {r.content} {r.stars} <Rate disabled allowHalf defaultValue={r.stars} />
    </div>)
  }
  );

  if (stars.count) {
    stars.average = stars.total / stars.count;
  }

  return (
    <div>
      <h2>{prod.name}</h2>
      <div>{prod.price}</div>
      <div>{prod.description}</div>
      <div>{prod.image}</div>
      <div>
        <ProductImage image={prod.image} />
      </div>
      <div>
        <button onClick={() => addToCart(prod)}>Add to cart</button>
      </div>
      <div>
        <h2>Customer reviews</h2>
        <div>
          {stars.average > -1 ? <Rate disabled allowHalf defaultValue={stars.average} /> : null}
        </div>
        {
          user && canReview ?
            <FormReview id={id} getReviews={getReviews} />
            : null
        }</div>
      <div>{review}</div>
    </div>
  );
};

export default Product;