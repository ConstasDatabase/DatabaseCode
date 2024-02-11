import { Modal, Button, Box, MenuItem, Typography, TextField, FormControl } from "@mui/material";
import { getPost } from './Axios';
import { useState, useEffect } from 'react';

import { PostNameStruct } from "./PostNameAxios";

/*
    const [cat, setCat] = useState('');
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    const savePost = () => {
        PostDataStruct(cat, name, link);
    }

*/

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '20%',
    borderColor: 'grey.300',
    backgroundColor:'white',
    boxShadow: 25,
    p: 4,
    flexGrow:1,
    flexDirection:'column',
    overflow:'hidden',
    overflowY:'scroll',
    overflowX:'scroll'
  };

const refStyles = [
    {value:"Book"},
    {value:"Website"},
    {value:"Journal"},
    {value:"Database"}
];

function AddName({openName, closeName}){

    const [data, setData] = useState([]);
    const [cat_id, setCat_id] = useState('');
    const [testName, setTestName] = useState('');

    const savePost = () => {
        PostNameStruct(testName, cat_id)
    }

    useEffect(() => {
        getPost().then(jsonData => {
          setData(jsonData)
        })
      }, [])   


    return(
        <Modal open={openName} onClose={closeName}>
            <Box sx={style}>
            <Typography variant="h6">
                To add a new test to the database, select a category and enter a test name:
            </Typography>
            <TextField select 
                    id="select-cat" 
                    label="Select Category Name" 
                    variant="filled"
                    value={cat_id}
                    onChange={(e) => setCat_id(e.target.value)}
                    sx={{ m: 2, width: '25ch' }}>
                        {data.map((catItem) => (
                            <MenuItem key={catItem.id} value={catItem.id}>
                            {catItem.category}
                            </MenuItem>
                        ))}
                    
                </TextField>
            <TextField
                    id="filled-test"
                    label="Test Name"
                    variant="filled"
                    value={testName}
                    onChange={(e) => setTestName(e.target.value)}
                    sx={{ m: 2, width: '25ch' }}
                />
        <div>
            <Button onClick={savePost}>
                Save
            </Button>
            <Button onClick={closeName}>
                Close
            </Button>
            </div>
            </Box>
        </Modal>
    );
}

export default AddName;

/*
                <div>
                <TextField
                    id="filled-firstName"
                    label="First Name"
                    variant="filled"
                    sx={{ m: 2, width: '25ch' }}
                />
                <TextField
                    id="filled-midName"
                    label="Middle Name"
                    variant="filled"
                    helperText="If Applicable"
                    sx={{ m: 2, width: '25ch' }}
                />
                <TextField
                    id="filled-lastName"
                    label="Last Name"
                    variant="filled"
                    sx={{ m: 2, width: '25ch' }}
                />
            </div>

            <div>
                <TextField
                    id="public-year"
                    label="Publication Year"
                    variant="filled"
                    type="number"
                    InputProps={{
                        inputProps: {
                          min: 0
                        }}}
                    sx={{ m: 2, width: '25ch' }}
                />
                <TextField
                    id="public-month"
                    label="Publication Month"
                    variant="filled"
                    sx={{ m: 2, width: '25ch' }}
                />
                <TextField
                    id="public-year"
                    label="Publication Day"
                    variant="filled"
                    type="number"
                    InputProps={{
                        inputProps: {
                          min: 1,
                          max: 31
                        }}}
                    sx={{ m: 2, width: '25ch' }}
                />
            </div>
            <div>
                <TextField
                    id="article-title"
                    label="Title of Article"
                    variant="filled"
                    sx={{ m: 2, width: '50ch' }}
                />
                <TextField
                    id="publisher-title"
                    label="Title of Periodical/Publisher"
                    variant="filled"
                    sx={{ m: 2, width: '50ch' }}
                />
            </div>
            <div>
               <TextField
                    id="volume-number"
                    label="Volume and Issue Number"
                    variant="filled"
                    helperText="i.e. Volume Number(Issue Number) or Volume Number"
                    sx={{ m: 2, width: '25ch' }}
               />
               <TextField
                    id="page-number"
                    label="Page Number or Page Range"
                    variant="filled"
                    helperText="i.e. 4 or 12-35"
                    sx={{ m: 2, width: '25ch' }}
               /> 
               <TextField
                    select
                    id="ref-type"
                    label="Select"
                    defaultValue="Select"
                    helperText="Select Reference Type"
                    variant="filled"
                    sx={{ m: 2, width: '25ch' }}
               >
                {refStyles.map((ref) => (
                    <MenuItem key={ref.index} value={ref.index}>
                    {ref.value}
                    </MenuItem>
                ))}
                </TextField>
            </div>
            <FormControl fullWidth sx={{m:2}}>
                <TextField
                    id="filled-doiOrLink"
                    label="URL or DOI"
                    variant="filled"
                />        
            </FormControl>
*/

