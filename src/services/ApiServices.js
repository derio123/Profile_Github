import axios from "axios"
import { API_GIT } from "../constants/apiConstants"

const api = axios.create({
    baseURL: API_GIT,
    headers: {
        Accept: 'application/json'
    }
})

export async function ApiServices(user) {
    try {
        const response = await api.get(`https://api.github.com/users/${user}`);
        console.log(response);
        return response;

    } catch (error) {
        console.error(`Serviço indisponível ${error}`);
        return error;
    }
}