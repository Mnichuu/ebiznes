import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/api.js";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price} - {product.category_id}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;