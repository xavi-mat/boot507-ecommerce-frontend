import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import ProductsMin from "./ProductsMin/ProductsMin";
import { Col, Divider, Row } from 'antd';
import e from "cors";
import { Space } from 'antd';

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

      <Space size={[8, 16]} wrap>
        {element}
      </Space>

    </div>
  )
};
export default Products;

