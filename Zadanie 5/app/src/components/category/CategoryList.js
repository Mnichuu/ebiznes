import React, { useEffect, useState } from "react";
import { getCategories } from "../../services/api.js";

function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((data) => setCategories(data))
            .catch((error) => console.error("Error fetching categories:", error));
    }, []);

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryList;