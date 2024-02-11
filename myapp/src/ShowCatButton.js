import { getPost } from './Axios';
import { useState, useEffect } from 'react';
import { ListItemButton, ListItemText } from '@mui/material';

function ShowCatButton() {

    const [data, setData] = useState([]);
    //const [search, setSearch] = useState([]);
  



    return (
        <ListItemButton disableRipple 
                        sx={{marginX:'10px', borderBottom: 1, borderColor:'grey.300'}} 
                        
                        onClick={useEffect(() => {
                            getPost().then(jsonData => {
                              setData(jsonData)
                            })
                          }, [])}>
            <ListItemText primary="Show All Categories"/>
        </ListItemButton>
    )
}

export default ShowCatButton
