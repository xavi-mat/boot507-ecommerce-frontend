const API_URL = "http://localhost:8080";

function ProductImage({ image, width="240px" }) {
  if (image) {
    const src = API_URL + "/products/image/" + image
    return (
      <img src={src} width={width} style={{ marginRight: "1rem" }} alt="" />
    )
  } else {
    return (
      <div style={{
        width: "240px", height: "240px",
        backgroundColor: "#BBBBBB", marginRight: "1rem"
      }} >
      </div>
    );
  }
}

export default ProductImage;