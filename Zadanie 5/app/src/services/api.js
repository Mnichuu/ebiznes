import axios from "axios";

const API_URL = "http://localhost:8080"; // Base URL for the backend

export const getProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};

export const createProduct = async (product) => {
    const response = await axios.post(`${API_URL}/products`, product);
    return response.data;
};

export const getCategories = async () => {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
};

export const createCategory = async (category) => {
    const response = await axios.post(`${API_URL}/categories`, category);
    return response.data;
};