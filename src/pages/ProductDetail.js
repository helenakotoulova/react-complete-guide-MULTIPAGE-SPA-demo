import {useParams} from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams(); // it will give us the key value
    
    return <section>
        <h1>Product Detail</h1>
        <p>{params.productId}</p>
    </section>
}

export default ProductDetail;