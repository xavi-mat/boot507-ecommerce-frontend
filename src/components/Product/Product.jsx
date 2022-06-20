import React from 'react'

function Product({name,price,description,image,id}) {
  const [products, setProducts] = useState([]);
    useEffect(() => {
        async function getElement() {

            const res = await axios.get("http://localhost:8080/products/list");
            setProducts(res.data.product)
        }
        getElement();


    }, [])

    const element = products.map((p) => <ProductsMin
        name={p.name}
        price={p.price}
        description={p.description}
        image={p.image}
        id={p.id} />
    );
 
 
  return (
    <div> 

        <h2>{name}</h2>
        <div>{price}</div>
        <div>{description}</div>
        <div>{image}</div>
        <button>{id}</button>
        <div>

        </div>

    </div>
  )
}

export default Product