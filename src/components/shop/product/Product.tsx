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
    const { title, image, description, price } = product
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{description}</p>
            <p>${price}</p>
        </div>
    )
}