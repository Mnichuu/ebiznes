import React, { useEffect, useState } from "react";
import axios from "axios";

function PaymentList() {
    const [cartItems, setCartItems] = useState([]);
    const cartID = 2;

    useEffect(() => {
        axios.get(`http://localhost:8080/carts/${cartID}`)
            .then((response) => {
                setCartItems(response.data.products);
            })
            .catch((error) => {
                console.error("Error fetching cart items:", error.response?.data || error.message);
            });
    }, []);

    const handlePayment = () => {
        const paymentData = {
            products: cartItems.map((item) => ({ id: item.id })),
        };

        axios.post("http://localhost:8080/payments", paymentData, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                console.log("Payment successful:", response.data);

                axios.put(`http://localhost:8080/carts/${cartID}/clear`)
                    .then(() => {
                        console.log("Cart cleared successfully.");
                        setCartItems([]);
                    })
                    .catch((error) => {
                        console.error("Error clearing cart:", error.response?.data || error.message);
                    });
            })
            .catch((error) => {
                console.error("Error processing payment:", error.response?.data || error.message);
            });
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div className="payment-container">
            <h1 className="payment-title">Podsumowanie Koszyka</h1>
            {cartItems.length === 0 ? (
                <p className="empty-cart">Twój koszyk jest pusty.</p>
            ) : (
                <>
                    <ul className="cart-list">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <span>ID: {item.id}</span>
                                <span>Produkt: {item.name}</span>
                                <span>Cena: ${item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="total-price">
                        <h2>Łączna cena: ${calculateTotalPrice()}</h2>
                    </div>
                </>
            )}
            {cartItems.length > 0 && (
                <button className="payment-button" onClick={handlePayment}>
                    Dokonaj Płatności
                </button>
            )}
        </div>
    );
}

export default PaymentList;