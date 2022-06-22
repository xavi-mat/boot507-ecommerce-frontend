import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import ProductsMin from "./ProductsMin/ProductsMin";

const Products = () => {
  const { getProducts, products } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  const element = products.map((p, i) => <ProductsMin
    key={i}
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
};
export default Products;

