import React from 'react'

function Product({name,price,description,image,id}) {
  return (
    <div> 

        <h2>{name}</h2>
        <div>{price}</div>
        <div>{description}</div>
        <div>{image}</div>
        <button>{id}</button>

    </div>
  )
}

export default Product