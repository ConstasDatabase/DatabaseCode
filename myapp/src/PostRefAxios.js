import axios from "axios";


export const PostRefStruct = (refLink, nameID) =>{

    const refStructData = 
    {'ref': refLink,
    'references_id': nameID
    }

    axios.post('http://127.0.0.1:7990/api/references/', JSON.stringify(refStructData), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log('Data posted successfully:', response.data);
        window.location.reload()
    })

    .catch(error => {
        console.error('Error posting data:', error);
    });

}

export default PostRefStruct;