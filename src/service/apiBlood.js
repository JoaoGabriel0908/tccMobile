import axios from "axios";

const apiBlood = axios.create({
    baseURL:'http://10.107.144.4:3000'
})

export default apiBlood