import './product.css';

interface ProductProps {
    product: Product;
}

interface Product {
    title: string;
    image: string;
    description: string;
    price: number;
    id: number;
}

export const Product = ({ product }: ProductProps) => {
    const { title, image, price } = product
    return (
        <>
            <div className="image-wrapper">
                <img src={image} alt={title} />
            </div>
            <h2>{title}</h2>
            <p>${price}</p>
        </>
    )
}