import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { UserContext } from "../../context/UserContext/UserState";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useContext(ProductContext);
  const { user } = useContext(UserContext);

  if (cart.length < 1) {
    return (<><h1>My Cart</h1><div>Your cart is empty.</div></>)
  }

  const doPayment = () => {

  }

  // TODO: This function will be in ProductContext
  const getProduct = (productId) => ({
    name: "TODO", price: "TODO", description: "TODO", price: "TODO"
  })

  const cartProduct = cart.map((productId, i) => {
    const p = getProduct(productId);
    return <>
      <div key={i}>
        <strong>{p.name}</strong> <span>{p.price} €</span>
        <div>
          {p.description}
        </div>
        {p.image}
      </div>
      <hr />
    </>
  }
  );
  return (
    <>
      <h1>My Cart</h1>
      <div>{cartProduct}</div>
      {user ?
        <button onClick={doPayment}>Pay now</button> :
        <>
          <Link to="/login">Login</Link> |
          <Link to="/register"> Register</Link>
        </>
      }
    </>
  )
}

export default Cart