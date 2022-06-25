import { Card, Space, Button } from 'antd';
import ProductImage from '../../../Products/ProductImage/ProductImage';

function ManagerProductMin({ name, price, description, image, id }) {

    return (
        <Card hoverable>
            <Space align='top'>
            <div style={{maxWidth:"150px", maxHeight:"150px", overflow:"hidden"}}>
                <ProductImage image={image} width={"150px"} />
            </div>
                <div>
                    <h2>{name}</h2>
                    <div>{description}</div>
                    <h3>{price} €</h3>
                    <Button type='primary'>Edit Product</Button>
                </div>
            </Space>
        </Card>
    )
}

export default ManagerProductMin