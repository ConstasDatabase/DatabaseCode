import { Modal, Typography, Box, Button, TextField, FormControl, MenuItem } from "@mui/material";
import { useState } from "react";
//import PostDataStruct from "./api/PostCatAxios";
import {PostRefStruct} from "./PostRefAxios";
//change width to 75 and height to 80 later on.

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '20%',
    borderColor: 'grey.300',
    backgroundColor:'white',
    boxShadow: 25,
    p: 4,
    flexGrow:1,
    flexDirection:'column',
    overflow:'hidden',
    overflowY:'scroll',
    overflowX:'scroll',
    
  };

const refStyles = [
    {value:"Book"},
    {value:"Website"},
    {value:"Journal"},
    {value:"Database"}
];

function AddRef ({onOpen, onCloseModal, catName, testName, name_id}){

    const [link, setLink] = useState('');
    const [testID, setTestID] = useState('');
    
    /*const saveID = () => {
        setTestID({name_id})
    }*/

    const savePost = () => {
        console.log(link);
        PostRefStruct(link, name_id);
    }

    return(
        
        <Modal open={onOpen} onClose={onCloseModal}>
            <Box sx={style}>
            <Typography variant="h6">
                Category: {catName}, Test: {testName}
            </Typography>

            <FormControl fullWidth sx={{m:2}}>
                <TextField
                    id="filled-doiOrLink"
                    label="URL or DOI"
                    variant="filled"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />        
            </FormControl>
            <Button onClick={savePost}> save </Button>
            <Button onClick={onCloseModal}> close </Button>

            </Box>
        </Modal>

        
    );
}

export default AddRef;

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
*/
