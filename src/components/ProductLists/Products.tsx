
// Define a type for a product
type Product = {
    id: number;
    imageSrc: string;
    title: string;
    rating: number;
    price: string;
};

// Define the props type for the ProductCard component
type ProductCardProps = {
    product: Product;
};

function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
            <a href="#">
                <img
                    className="rounded-t-lg"
                    src={product.imageSrc}
                    alt="product image"
                />
            </a>
            <div className="mt-4">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {product.title}
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    {/* Rating stars */}
                    {Array.from({ length: product.rating }, (_, index) => (
                        <svg
                            key={index}
                            className="w-4 h-4 text-yellow-300 mr-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            {/* SVG path for star */}
                        </svg>
                    ))}
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {product.price}
                    </span>
                    <a
                        href="#"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}

function Products() {
    // Sample product data (you can replace with your actual data)
    const products: Product[] = [
        {
            id: 1,
            imageSrc: 'product1.jpg',
            title: 'Product 1',
            rating: 4,
            price: '$299',
        },
        {
            id: 2,
            imageSrc: 'product2.jpg',
            title: 'Product 2',
            rating: 5,
            price: '$399',
        },
        {
            id: 3,
            imageSrc: 'product3.jpg',
            title: 'Product 3',
            rating: 3,
            price: '$199',
        },
        {
            id: 4,
            imageSrc: 'product4.jpg',
            title: 'Product 4',
            rating: 4,
            price: '$499',
        },
    ];

    return (
        <div className="flex flex-wrap gap-4 p-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default Products;
