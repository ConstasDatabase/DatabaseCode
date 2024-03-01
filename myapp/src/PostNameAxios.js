import axios from "axios";


export const PostNameStruct = (testLink, catID) =>{

    const nameStructData = 
    {'name': testLink,
    'testNames_id': catID
    }

    axios.post('http://127.0.0.1:7990/api/testNames/', JSON.stringify(nameStructData), {
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

export default PostNameStruct;