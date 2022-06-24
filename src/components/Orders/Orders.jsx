import { useContext, useEffect } from "react"
import { OrdersContext } from "../../context/OrdersContext/OrdersState"
import Order from "./Order/Order";

function Orders() {
    const { orders, getOrders } = useContext(OrdersContext);

    useEffect(() => {
        getOrders();
    }, []);

    const order = orders.map((o, i) =>
        <Order key={i} order={o} />
    )

    return (
        <>
            <h1>My Orders</h1>
            {order}
        </>
    )
}

export default Orders