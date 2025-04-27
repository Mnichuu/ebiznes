import React, { useEffect, useState } from "react";
import axios from "axios";

function CartList() {
    const [cartItems, setCartItems] = useState([]);
    const cartID = 5;

    useEffect(() => {
        // Fetch cart items from the backend
        axios.get(`http://localhost:8080/carts/${cartID}`)
            .then((response) => {
                setCartItems(response.data.products);
            })
            .catch((error) => {
                console.error("Error fetching cart items:", error.response?.data || error.message);
            });
    }, []);


    return (
        <div className="cart-container">
            <h1 className="cart-title">Twój Koszyk</h1>
            {cartItems.length === 0 ? (
                <p className="empty-cart">Twój koszyk jest pusty.</p>
            ) : (
                <ul className="cart-list">
                    {cartItems.map((item, index) => (
                        <li key={index} className="cart-item">
                            <span>ID: {item.id}</span>
                            <span>Produkt: {item.name}</span>
                            <span>Cena: ${item.price}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CartList;