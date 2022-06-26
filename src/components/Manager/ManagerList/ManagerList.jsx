import { List } from "antd";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import ManagerProductMin from "./ManagerProductMin/ManagerProductMin";
import ProductForm from "./ProductForm/ProductForm";

const ManagerList = () => {

  const { getProducts, products } = useContext(ProductsContext);
  const [productInForm, setProductInForm] = useState(undefined);

  useEffect(() => {
    getProducts();
  }, []);

  const putInForm = (id) => {
    setProductInForm(id);
  }

  const product = products.map((p, i) => {

    if (p.id === productInForm) {
      return (
        <ProductForm
          key={i}
          name={p.name}
          price={p.price}
          description={p.description}
          image={p.image}
          id={p.id}
          active={p.active}
          putInForm={putInForm}
        />
      );
    } else {
      return (
        <ManagerProductMin
          key={i}
          name={p.name}
          price={p.price}
          description={p.description}
          image={p.image}
          id={p.id}
          active={p.active}
          putInForm={putInForm}
        />
      );
    }
  }
  );

  return (
    <div style={{ margin: "1rem 3rem" }}>
      <h1>Products</h1>
      <div><ProductForm /></div>
      <List
        dataSource={product}
        renderItem={p => (
          <List.Item>{p}</List.Item>
        )}
        pagination={{ defaultPageSize: 5, position: "both" }}
      />
    </div>
  )
};
export default ManagerList;

