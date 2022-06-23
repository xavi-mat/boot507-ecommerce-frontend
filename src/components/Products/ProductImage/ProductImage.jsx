const API_URL = "http://localhost:8080";

function ProductImage({ image }) {
  if (image) {
    const src = API_URL + "/products/image/" + image
    return (
      <img src={src} width={150} style={{ marginRight: "1rem" }} />
    )
  } else {
    return (
      <div style={{
        width: "150px", height: "150px",
        backgroundColor: "#BBBBBB", marginRight: "1rem"
      }} >
      </div>
    );
  }
}

export default ProductImage;