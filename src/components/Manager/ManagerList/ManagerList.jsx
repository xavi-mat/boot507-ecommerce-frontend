import { useContext, useEffect } from "react";
import { Space } from 'antd';
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import ManagerProductMin from "./ManagerProductMin/ManagerProductMin";
import ProductForm from "./ProductForm/ProductForm";

const ManagerList = () => {
  const { getProducts, products } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  const product = products.map((p, i) => <ManagerProductMin
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
      <div><ProductForm /></div>
      <div>{product}</div>
    </div>
  )
};
export default ManagerList;

