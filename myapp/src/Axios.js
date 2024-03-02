import axios from 'axios';


export const api = axios.create({
    baseURL: '/api'
})


export const getPost = async () => {
    try{
        const response = await api.get('/');
        return response.data;
    }catch (e) {
        console.error('Message: ', e);
        throw e;
    }
}

