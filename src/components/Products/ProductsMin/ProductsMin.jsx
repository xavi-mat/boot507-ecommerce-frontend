import React from 'react'

function ProductsMin({name,price,description,image,id}) {
  return (
    <div> 

        <div>{name}</div>
        <div>{price}</div>
        <div>{description}</div>
        <div>{image}</div>
        <button>{id}</button>

    </div>
  )
}

export default ProductsMin