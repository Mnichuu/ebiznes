import React, { useState } from "react";
import axios from "axios";

function Produkty() {
    const [productData, setProductData] = useState({
        name: "",
        price: "",
        category_id: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedProductData = {
            ...productData,
            price: parseFloat(productData.price),
            category_id: parseInt(productData.category_id, 10),
        };
        axios.post("http://localhost:8080/products", formattedProductData, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                console.log("Product added successfully:", response.data);
            })
            .catch((error) => {
                console.error("Error adding product:", error.response?.data || error.message);
            });
    };

    return (
        <div>
            <h1>Dodaj Produkt</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nazwa:</label>
                    <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Cena:</label>
                    <input
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>ID Kategorii:</label>
                    <input
                        type="number"
                        name="category_id"
                        value={productData.category_id}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Dodaj Produkt</button>
            </form>
        </div>
    );
}

export default Produkty;