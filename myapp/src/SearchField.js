import { Box, Button, Input } from '@mui/material';
import { Search } from '@mui/icons-material';

/*
<Button color="primary" disableRipple sx={{color: purple[900], marginX: 2}}>
                    <AddCircle fontSize='large'/>
                    </Button> 
                    
*/

function SearchDisp ({infos, results}){

    
    const searchData = (data, query) => {
        if (Array.isArray(data)) {
            return data.some(info => searchData(info, query));
        } else if (typeof data === 'object') {
            const keys = Object.keys(data);
            return keys.some(key => {
                if (typeof data[key] === 'string') {
                    return data[key].toLowerCase().includes(query.toLowerCase());
                } else {
                    return searchData(data[key], query);
                }
            });
        }
        return false;
    };

    const handleSubmit = (e) => e.preventDefault()

    const handleSearchResults = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        if(!searchQuery) return results(infos)

        const infoArr = infos.filter(info => searchData(info, searchQuery))

        results(infoArr)
    }

    return (
       
        <Box sx={{ 
                display:'flex', 
                justifyContent:'center', 
                alignItems:'center', 
                height: '15vh', 
                borderBottom: 4,
                borderColor:'grey.300',
            }}>
            
            <Box  sx={{ 
                    display:'flex', 
                    width:'40%', 
                    height: '8vh', 
                    backgroundColor:'white', 
                    borderRadius:'15px', 
                    alignItems: 'center', 
                    justifyContent:'center', 
                    border:1,
                    borderColor:'grey.300',
                    
                }}
                >
                <form onSubmit={handleSubmit}>
                <Button sx={{color:'black', '&:hover':{backgroundColor: 'white'}}}>
                <Search fontSize='medium' />
                </Button>
                <Input onChange={handleSearchResults} disableUnderline placeholder='Search...' sx={{
                                                                    color:'black',
                                                                    width: '65vh', 
                                                                    fontSize: 'large'}}/>
                </form>
            </Box>
            
        </Box>
        
    );
}

export default SearchDisp;

