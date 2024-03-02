import axios from 'axios';


export const api = axios.create({
    baseURL: 'https://constaslab.chem.uwo.ca/'
})


export const getPost = async () => {
    try{
        const response = await api.get('api/');
        return response.data;
    }catch (e) {
        console.error('Message: ', e);
        throw e;
    }
}

