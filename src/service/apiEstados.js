import axios from "axios";

const apiEstados = axios.create({
    baseURL:'https://servicodados.ibge.gov.br/api/v1/localidades/'
})

export default apiEstados