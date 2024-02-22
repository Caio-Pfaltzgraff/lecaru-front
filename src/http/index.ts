import axios from "axios";

const apiV1 = axios.create({
    baseURL: "http://localhost:8085/api/v1/"
})

const apiV2 = axios.create({
    baseURL: "http://localhost:8085/api/v2"
})

export default apiV1