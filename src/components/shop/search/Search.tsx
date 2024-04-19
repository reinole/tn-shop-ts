interface SearchProps {
    products: Product[];
    setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

interface Product {
    title: string;
    image: string;
    description: string;
    price: number;
    id: number;
    category: string;
}

export const Search = ({ products, setFilteredProducts }: SearchProps) => {
    const searchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value
        const filtered = products.filter((product: Product) => product.title.toLowerCase().includes(search.toLowerCase()))
        setFilteredProducts(filtered)
    }

    return (
        <div>
            <h1>Search</h1>
            <input type="text" placeholder="Search products" onChange={searchProducts} />
        </div>
    )
}