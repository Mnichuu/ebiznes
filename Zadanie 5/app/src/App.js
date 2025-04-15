import React from "react";
import ProductList from "./components/products/ProductList";
import CategoryList from "./components/category/CategoryList";

function App() {
  return (
      <div>
        <h1>React Frontend for Go Backend</h1>
        <ProductList />
        <CategoryList />
      </div>
  );
}

export default App;