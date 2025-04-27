import React, { useState } from "react";
import axios from "axios";

function PaymentList() {
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
        <div className="payment-container">
            <h1 className="payment-title">Dodaj Produkt</h1>
            <form onSubmit={handleSubmit} className="payment-form">
                <div className="form-group">
                    <label>Nazwa:</label>
                    <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Cena:</label>
                    <input
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="payment-button">Dodaj Produkt</button>
            </form>
        </div>
    );
}

export default PaymentList;