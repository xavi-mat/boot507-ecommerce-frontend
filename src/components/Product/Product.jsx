import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext/ProductState'
import FormReview from './FormReview/FormReview'
import { UserContext } from '../../context/UserContext/UserState'
import ProductImage from '../Products/ProductImage/ProductImage'

function Product() {

  const { id } = useParams()
  const [reviews, setReviews] = useState([])
  const { name, price, description, image, cart, addCart } = useContext(ProductContext)
  const { user } = useContext(UserContext);

  async function getReviews() {
    const res = await axios.get("http://localhost:8080/reviews/product/" + id);
    setReviews(res.data.result)
  };
  useEffect(() => {
    getReviews();
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  let canReview = true;
  const review = reviews.map((r,i) => {
    const userIsAuthor = r.UserId === user?.id
    canReview = canReview && !userIsAuthor;
    return <div key={i} style={userIsAuthor ? {"background":"#FFFFAA"} : {}}>{r.content} {r.stars}</div>
  }
  );

  return (
    <div>
      <h2>{name}</h2>
      <div>{price}</div>
      <div>{description}</div>
      <div>{image}</div>
      <ProductImage image={image} />
      <button onClick={() => addCart(id)}>Add to cart</button>
      <div>{
        user && canReview ?
          <FormReview id={id} getReviews={getReviews} />
          : null
      }</div>
      <div>{review}</div>
    </div>
  );
};

export default Product;