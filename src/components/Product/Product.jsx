import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext/ProductState'
import FormReview from './FormReview/FormReview'


function Product() {
  const token = JSON.parse(localStorage.getItem("token"));
  const {id} = useParams()
  const [reviews, setReviews] = useState([])  
  const {name,price,description,image}= useContext(ProductContext)
  useEffect(() => {
        async function getReviews() {

            const res = await axios.get("http://localhost:8080/reviews/product/"+id);
            setReviews(res.data.result)
            
        }
        getReviews();


    }, [])

    const review = reviews.map((r) => 
    
    <div>
      {r.content} {r.stars}
    </div>
    

    );
 
 
  return (
    <div> 

        <h2>{name}</h2>
        <div>{price}</div>
        <div>{description}</div>
        <div>{image}</div>
        <button>{id}</button>
        <div>
          {token ? <FormReview id={id}></FormReview> : null}
        
        {review}
        </div>

    </div>
  )
}

export default Product