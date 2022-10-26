import axios from "axios"

const axiosClient = axios.create({
    baseURL: 'https://register-service-quan.herokuapp.com/',
    headers: {
        'content-type': 'application/json',
    }
})

export default axiosClient;