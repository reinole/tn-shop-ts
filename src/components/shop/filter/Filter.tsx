interface ProductProps {
    products: Product[];
    setFilter: (filter: string) => void;
}

interface Product {
    title: string;
    image: string;
    description: string;
    price: number;
    id: number;
    category: string;
}

export const Filter = ({ products, setFilter }: ProductProps) => {
    if (!products) return

    const filterCategories = () => {
        const categories = products.map((product: Product) => product.category)
        categories.splice(0, 0, "All")

        return [...new Set(categories)]
    }

    const categories = filterCategories()

    return (
        <div>
            {categories.map((category: string) => {
                return <button key={category} onClick={() => setFilter(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</button>
            })}
        </div>
    )
}