import axios from "axios";

const apiBlood = axios.create({
    baseURL:'http://10.107.144.2:3000'
    // baseURL: 'http://10.107.144.23:3000'
    // baseURL: 'http://192.168.1.100:3000'
    // baseURL: 'http://10.107.144.31:3000'
})

export default apiBlood