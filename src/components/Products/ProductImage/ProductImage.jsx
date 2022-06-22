const API_URL = "http://localhost:8080";

function ProductImage({ image }) {
    if (image) {
        const src = API_URL + "/products/image/" + image
        return (
            <img src={src} />
        )
    } else {
        return null;
    }
}

export default ProductImage;