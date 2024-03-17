import axios from 'axios';


export const api = axios.create({
    baseURL: 'http://127.0.0.1:7990/api/'
})


export const getPost = async () => {
    try{
        const response = await api.get('categories/');
        return response.data;
    }catch (e) {
        console.error('Message: ', e);
        throw e;
    }
}

