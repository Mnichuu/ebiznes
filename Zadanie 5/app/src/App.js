import React from "react";
import ProductList from "./components/products/ProductList";
import CategoryList from "./components/category/CategoryList";
import PaymentList from "./components/payments/PaymentList";

function App() {
  return (
      <div>
        <h1>React Frontend for Go Backend</h1>
        <ProductList />
        <CategoryList />
        <PaymentList />
      </div>
  );
}

export default App;