import axios from 'axios';


export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})


export const getPost = async () => {
    try{
        const response = await api.get('api/categories/');
        return response.data;
    }catch (e) {
        console.error('Message: ', e);
        throw e;
    }
}

