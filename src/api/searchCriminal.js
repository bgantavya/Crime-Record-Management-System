import axios from "axios";

export const getCriminals = ()=> axios.get('https://dummyjson.com/users')
export const getCriminal = (id)=> axios.get(`https://dummyjson.com/users/${id}`)