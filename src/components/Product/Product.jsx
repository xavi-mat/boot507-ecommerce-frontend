import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import FormReview from './FormReview/FormReview'
import { UserContext } from '../../context/UserContext/UserState'
import ProductImage from '../Products/ProductImage/ProductImage'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'

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
  const review = reviews.map((r,i) => {
    const userIsAuthor = r.UserId === user?.id
    canReview = canReview && !userIsAuthor;
    return <div key={i} style={userIsAuthor ? { "background": "#FFFFAA" } : {}}>{r.content} {r.stars}</div>
  }
  );

  return (
    <div>
      <h2>{prod.name}</h2>
      <div>{prod.price}</div>
      <div>{prod.description}</div>
      <div>{prod.image}</div>
      <ProductImage image={prod.image} />
      <button onClick={() => addToCart(prod)}>Add to cart</button>
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