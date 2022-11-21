import axios from "axios";

const apiBlood = axios.create({
    // baseURL:'http://10.107.144.8:3000'
    // baseURL: 'http://10.107.144.23:3000'
    baseURL: 'http://192.168.1.106:3000'
    // baseURL: 'http://10.107.134.25:3000'
})

export default apiBlood