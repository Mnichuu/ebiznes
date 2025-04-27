import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ProductList from "./components/products/ProductList";
import PaymentList from "./components/payments/PaymentList";
import CartList from "./components/cart/CartList";

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Produkty</Link></li>
                    <li><Link to="/koszyk">Koszyk</Link></li>
                    <li><Link to="/platnosci">Płatności</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/koszyk" element={<CartList />} />
                <Route path="/platnosci" element={<PaymentList />} />
            </Routes>
        </Router>
    );
}

export default App;