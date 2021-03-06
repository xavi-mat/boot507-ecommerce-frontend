import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import ProductsMin from "./ProductsMin/ProductsMin";
import { Space } from 'antd';

const Products = () => {
  const { getProducts, products } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  const product = products
    .filter(p => p.active)  // Only active products will be seen
    .map((p, i) => <ProductsMin
      key={i}
      name={p.name}
      price={p.price}
      description={p.description}
      image={p.image}
      id={p.id} />
    );

  return (
    <div style={{ margin: "1rem 3rem" }}>
      <h1>Products</h1>
      <Space size={[24, 24]} wrap>
        {product}
      </Space>
    </div>
  )
};
export default Products;

