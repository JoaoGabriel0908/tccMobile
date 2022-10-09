import axios from "axios";

const apiBlood = axios.create({
    baseURL:'http://localhost:3000'
})

export default apiBlood