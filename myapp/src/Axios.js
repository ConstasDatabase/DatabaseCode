import axios from 'axios';


export const api = axios.create({
    baseURL: 'https://constaslab.chem.uwo.ca:443/apis/'
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

