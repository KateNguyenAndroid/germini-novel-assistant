import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Adjust if your backend is hosted elsewhere

export const generateNovelContent = async (idea: string, language: string) => {
    const response = await axios.post(`${API_URL}/generate`, { idea, language });
    return response.data;
};

export const registerUser = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/register`, { username, password });
    return response.data;
};

export const loginUser = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
};
