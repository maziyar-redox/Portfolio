import axios from "axios";

const AxiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_SERVER,
    timeout: 10000,
    validateStatus: () => true,
    adapter: "fetch",
});

export { AxiosClient };
