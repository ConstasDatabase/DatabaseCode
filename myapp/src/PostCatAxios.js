import axios from "axios";

export const PostDataStruct = (catLink) => {
    
    const catStructData = {'category': catLink
       }
    
    axios.post('https://constaslab.chem.uwo.ca:443/apis/api/categories/', JSON.stringify(catStructData), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log('Data posted successfully:', response.data);
        window.location.reload()
    })
    
    /*.catch(error => {
        console.error('Error posting data:', error);
    });*/


}




export default PostDataStruct;