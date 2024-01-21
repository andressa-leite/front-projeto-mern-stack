import axios from "axios";

const baseURL = "http://localhost:3000";

export function getAllNews(){
    const response = axios.get(`${baseURL}/news`)
    return response;
}

export function getTopNews(){
    const response = axios.get(`${baseURL}/news/top`)
    return response;
} 

export function searchNews(typedTitle){
    const response = axios.get(`${baseURL}/news/search?title=${typedTitle}`)
    return response;
} 