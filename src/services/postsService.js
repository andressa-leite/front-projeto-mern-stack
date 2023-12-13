import axios from "axios";

const baseURL = "http://localhost:3000";

export function getAllPosts(){
    const response = axios.get(`${baseURL}/posts`)
    return response;
}