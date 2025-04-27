import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/api.js";
import axios from "axios";

function ProductList() {
    const [products, setProducts] = useState([]);

    const handleAddToCart = (product) => {
        const cartData = {
            products: [{ id: product.id }],
        };
        const cartID = 5;

        axios.put(`http://localhost:8080/carts/${cartID}`, cartData, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                console.log("Product added to cart successfully:", response.data);
            })
            .catch((error) => {
                console.error("Error adding product to cart:", error.response?.data || error.message);
            });
    };

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="product-container">
            <h1 className="product-title">Produkty</h1>
            <ul className="product-list">
                {products.map((product) => (
                    <li key={product.id} className="product-item">
                        <span>{product.name} - ${product.price}</span>
                        <button
                            className="add-to-cart-button"
                            onClick={() => handleAddToCart(product)}
                        >
                            Dodaj do Koszyka
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;