function Order({ order }) {
  const detail = order.Details.map((d, i) => (
    <li key={i}>
      <strong>{d.Product.name}</strong>.&nbsp;
      <span>quantity: {d.quantity}</span>&nbsp;
      <span>price: {d.price} €</span>
    </li>
  ))
  return (
    <>
      <h4>Order num: {order.id}</h4>
      <div>Date: {order.date}</div>
      <div>Status: {order.status}</div>
      <div>Products:</div>
      <ul>{detail}</ul>
      {order.status === "open" ? <button>Pay now</button> : null}
      <hr />
    </>
  )
}

export default Order