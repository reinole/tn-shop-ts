import { useEffect, useState } from "react"
import { Product } from "../product/Product"

interface Product {
    title: string;
    image: string;
    description: string;
    price: number;
    id: number;
}

export const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json)
                setLoading(false)
            })

    }, [])

    const NoProducts = () => {
        return <h1>No products found</h1>
    }

    const LoadingProducts = () => {
        return <h1>Loading products...</h1>
    }

    return (
        <div>
            <h1>Products</h1>
            {!products && !loading && <NoProducts />}
            {loading && <LoadingProducts />}
            {products && products.map((product: Product) => {
                return (
                    <div key={product.id}>
                        <Product product={product} />
                    </div>
                )
            })}

        </div>
    )
}