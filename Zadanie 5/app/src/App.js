import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ProductList from "./components/products/ProductList";
import PaymentList from "./components/payments/PaymentList";
import CartList from "./components/cart/CartList";
import "./assets/styles/App.css";
import "./assets/styles/CartList.css";
import "./assets/styles/ProductList.css";
import "./assets/styles/PaymentList.css";
import Register from "./components/register/register";
import Login from "./components/login/login";
import Chat from "./components/chat/Chat";


function App() {
    return (
        <Router>
            <div className="app">
                <nav className="navbar">
                    <h1 className="logo">MójSklep</h1>
                    <ul className="nav-links">
                        <li><Link to="/">Produkty</Link></li>
                        <li><Link to="/koszyk">Koszyk</Link></li>
                        <li><Link to="/platnosci">Płatności</Link></li>
                        <li><Link to="/login">Logowanie</Link></li>
                        <li><Link to="/register">Rejestracja</Link></li>
                        <li><Link to="/chat">Chat</Link></li>
                    </ul>
                </nav>
                <main className="content">
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/koszyk" element={<CartList />} />
                        <Route path="/platnosci" element={<PaymentList />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/chat" element={<Chat />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;