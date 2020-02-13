import axios from 'axios';
export default () => {
    return axios.create({
        baseURL: "http://ibiza.dcc.ufla.br:5020"
    })
}