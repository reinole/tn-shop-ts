import { useEffect, useState } from "react"
import { Product } from "../product/Product"
import { Filter } from "../filter/Filter"
import { Search } from "../search/Search";

import './products.css';

interface Product {
    title: string;
    image: string;
    description: string;
    price: number;
    id: number;
    category: string;
}

export const Products = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [filter, setFilter] = useState('All')
    const [products, setProducts] = useState<Product[]>([])
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

    useEffect(() => {
        setLoading(true)
        setError(false)
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json)
                setLoading(false)
            }).catch(() => {
                setError(true)
                setLoading(false)
            })

    }, [])

    useEffect(() => {
        if (filter === 'All') {
            setFilteredProducts(products)
        } else {
            const filtered = products.filter((product: Product) => product.category === filter)
            setFilteredProducts(filtered)
        }

    }, [filter, products])

    if (error) return <h1>Something went wrong</h1>

    if (!products && !loading) return <h1>No products found</h1>


    if (loading) return <h1>Loading products...</h1>




    return (
        <div>
            <h1>Products</h1>
            <Search products={products} setFilteredProducts={setFilteredProducts} />
            <Filter products={products} setFilter={setFilter} />
            <div className="products-wrapper">
                {filteredProducts.map((product: Product) => {
                    return (
                        <div className="product-wrapper" key={product.id}>
                            <Product product={product} />
                        </div>
                    )
                })}
            </div>
        </div >
    )
}