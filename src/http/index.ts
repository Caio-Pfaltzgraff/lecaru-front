import axios from "axios";

export const viacepAPI = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})