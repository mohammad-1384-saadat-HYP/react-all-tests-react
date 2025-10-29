import axios from "axios";

export const jsonPlaceHolder = axios.create({
    baseURL: import.meta.env.VITE_MY_BASE_URL_IN_AXIOS,
    headers: {
        'Content-Type': 'application/json',
    }
});