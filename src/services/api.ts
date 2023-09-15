import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://easy-templates-org.vercel.app/api/',
});
