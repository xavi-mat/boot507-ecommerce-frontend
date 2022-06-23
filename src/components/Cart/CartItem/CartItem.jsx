import ProductImage from "../../Products/ProductImage/ProductImage"

function CartItem({ p }) {
    return (
        <div>
            <strong>{p.name}</strong> <span>{p.price.toFixed(2)} €</span>
            <div>
                {p.description}
            </div>
            <ProductImage image={p.image} />
        </div>
    )
}

export default CartItem;