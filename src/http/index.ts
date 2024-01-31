import axios from "axios";

const apiV1 = axios.create({
    baseURL: "http://localhost:8080/api/v1/"
})

export default apiV1