import { useState } from "react"
import axios from "axios"
import { useEffect } from "react";
import ProductsMin from "./ProductsMin/ProductsMin";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getElement() {
      const res = await axios.get("http://localhost:8080/products/list");
      setProducts(res.data.product)
    }
    getElement();
  }, []);

  const element = products.map((p) => <ProductsMin
    name={p.name}
    price={p.price}
    description={p.description}
    image={p.image}
    id={p.id} />
  );

  return (

    <div>
      <h1>Products</h1>
      {element}
    </div>
  )
}

export default Products