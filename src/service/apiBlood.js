import axios from "axios";

const apiBlood = axios.create({
    // baseURL:'http://10.107.144.2:3000'
    baseURL: 'http://10.107.144.33:3000'
    //baseURL: 'http://192.168.1.109:3000'
    // baseURL: 'http://10.107.144.16:3000'
})

export default apiBlood