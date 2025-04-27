import React, { useEffect, useState } from "react";
import axios from "axios";

function CartList() {
    const [cartItems, setCartItems] = useState([]);
    const cartID = 4; // Replace with the actual cart ID

    useEffect(() => {
        // Fetch cart items from the backend
        axios.get(`http://localhost:8080/carts/${cartID}`)
            .then((response) => {
                setCartItems(response.data.products); // Assuming the response contains a `products` array
            })
            .catch((error) => {
                console.error("Error fetching cart items:", error.response?.data || error.message);
            });
    }, []);

    return (
        <div>
            <h1>Koszyk</h1>
            {cartItems.length === 0 ? (
                <p>Twój koszyk jest pusty.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            Produkt ID: {item.id}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CartList;