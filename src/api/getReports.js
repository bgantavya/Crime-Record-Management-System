import axios from "axios";

export const getReports = () => axios.get('https://dummyjson.com/products')
export const getReport = (uid) => axios.get(`https://dummyjson.com/product/${uid}`)