import axios from "axios";

const AxiosClient = axios.create({
    baseURL: "http://localhost:8000/",
    timeout: 10000,
    validateStatus: () => true,
    adapter: "fetch",
});

export { AxiosClient };
