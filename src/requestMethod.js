import axios from "axios";

const BASE_URL = "https://vl-ecommerce.herokuapp.com/api/"


export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest=(token) => axios.create({
    baseURL:BASE_URL,
    header:{
        token:`Bearer ${token}`
    }
});



