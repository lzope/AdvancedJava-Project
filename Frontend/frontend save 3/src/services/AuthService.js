import axios from 'axios';
import  base_url from "../services/CourseService"

// const BASE_URL = 'http://localhost:8080/api/v1/auth';

export const login = async (userData) => {
    try {
        const response = await axios.post(`${base_url}/api/v1/auth/login`, userData);
        return response.data; // Assuming the response contains login information
    } catch (error) {
        throw error;
    }
};