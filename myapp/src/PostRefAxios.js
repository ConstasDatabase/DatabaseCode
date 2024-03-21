import axios from "axios";


export const PostRefStruct = (link, year, finderEmail, title, pub, vol, issue, pages, authors, type, nameID) =>{

    const refStructData = 
    {'refLink': link,
    'refYear': year,
    'refFinderEmail': finderEmail,
    'refTitle': title,
    'refPub': pub,
    'refVol': vol,
    'refIssue': issue,
    'refPages': pages,
    'refAuthors': authors,
    'refType': type,
    'references_id': nameID
    }

    axios.post('https://constaslab.chem.uwo.ca/links/api/references/', JSON.stringify(refStructData), {
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