const API_URL = process.env.REACT_APP_API_URL;

function ProductImage({ image, width="240px" }) {
  if (image) {
    const src = API_URL + "/products/image/" + image
    return (
      <img src={src} width={width} style={{ marginRight: "1rem" }} alt="" />
    )
  } else {
    return (
      <div className="product-empty">
      </div>
    );
  }
}

export default ProductImage;