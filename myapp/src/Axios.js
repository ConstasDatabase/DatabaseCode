import axios from 'axios';


export const api = axios.create({
    baseURL: 'http://10.100.2.13:7990/'
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

