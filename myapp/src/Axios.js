import axios from 'axios';


export const api = axios.create({
    baseURL: 'https://10.100.2.2:443/'
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

