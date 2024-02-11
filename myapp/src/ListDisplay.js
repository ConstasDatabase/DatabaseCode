import { Box, Typography, List, ListItemButton, ListItemText, Stack, ListItem, Collapse, Button} from '@mui/material';
import { Add, ExpandMore, ExpandLess } from '@mui/icons-material';
import AddRef from './AddRef';
import AddCat from './AddCat';
import AddName from './AddName';
import { useState } from 'react';
/*
{loading && <div> Loading...</div>}
useEffect(() => {
        fetch('http://localhost:3002/data')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setJsonData(data);
                setLoading(false);
                return true;
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
            })

    }, []);
    
*/


function ListView({jsonData, resetData}){

    //const [jsonData, setJsonData] = useState(null);
    //const [loading, setLoading] = useState(true);

    const [open, setOpen] = useState({});

    const [filterCat, setFilterCat] = useState(null);

    const [ref, setRef] = useState(false);

    const [openCat, setOpenCat] = useState(false);

    const [openTest, setOpenTest] = useState(false);


    const handleOpenRef = (index) => {
        setOpen({...open, [index]:!open[index]});
    };

    const handleFilterCat = (category) => {
        setFilterCat(category);
    }

    const handleShowAll = () => {
        setFilterCat(resetData.category);
        
    }

    const addRef = () => {
        setRef(true);
    }

    const closeRef = () => {
        setRef(false);
    }

    const addCat = () => {
        setOpenCat(true);
    }

    const closeCat = () => {
        setOpenCat(false);
    }

    const openNewTest = () => {
        setOpenTest(true);
    }

    const closeNewTest = () => {
        setOpenTest(false);
    }

    return (
        
        <Stack direction="row" >
            
            {jsonData && <><Box sx={{ 
                position:'relative',
                display:'flex', 
                height: '85vh',
                left:0,
                width:'25%',
                flexGrow:1,
                flexDirection:'column',
                overflow:'hidden',
                overflowY:'scroll',
                overflowX:'scroll',
                borderRight: 2,
                borderColor:'grey.300'
                }}>
                    <div>
                        <Typography variant="h5" sx={{marginX:'15px'}}> Categories </Typography>
                        <List>
                            <ListItemButton disableRipple 
                                sx={{marginX:'10px', borderBottom: 1, borderColor:'grey.300'}} 
                                
                                onClick={handleShowAll}>
                                    <ListItemText primary="Show All Categories"/>
                            </ListItemButton>
                        
                            {jsonData.map((categoryItem) => (
                                <ListItemButton key={categoryItem.uniqueId} 
                                selected={filterCat === categoryItem.category} 
                                onClick={() => handleFilterCat(categoryItem.category)}
                                sx={{marginX:'10px', borderBottom: 1, borderColor:'grey.300'}}>
                                    <ListItemText primary={categoryItem.category} />
                                </ListItemButton>
                            ))}
                            <ListItem>
                            
                            <ListItemButton sx={{marginX:'10px'}} onClick={addCat}>
                                <Add fontSize='small'/>
                                <ListItemText sx={{fontStyle:'italic'}} primary="Add New Category..."/>
                            </ListItemButton>
                                <AddCat setOpen={openCat} setClose={closeCat}/>
                            
                            </ListItem>
                        
                        </List>
                    </div> 
                </Box>
            <Box sx={{ 
                position:'relative',
                display:'flex', 
                height: '85vh',
                left: 0,
                width:'75%',
                flexGrow:1,
                flexDirection:'column',
                overflow:'hidden',
                overflowY:'scroll',
                overflowX:'scroll'
                }}>
                    <div>
                        {filterCat ? 
                        jsonData.filter((catItem) => catItem.category === filterCat).map((catItem) => (
                            <List disablePadding>
                                
                                {catItem.testNames.map((nameItem) => (
                                    <ListItem key={nameItem.name} 
                                    
                                    sx={{borderBottom: 1, borderColor:'grey.300', marginX:'10px'}}>
                                        
                                        <ListItemText primary={nameItem.name}
                                        secondary={
                                            <Collapse in={open[nameItem.name]} timeout='auto' unmountOnExit>
                                            
                                            <List  disablePadding>
                                            {nameItem.references.map((refItem, refItemIndex) => (
                                            <ListItem key={refItemIndex}>
                                                <ListItemText secondary={refItem.ref}/>
                                            </ListItem>
                                            ))}
                                            </List>
                                            {(nameItem.references.length) < 5  ? (
                                                <ListItem> 
                                                    <ListItemButton onClick={addRef}>
                                                    <Add fontSize='small'/>
                                                    <ListItemText secondary='Add Reference (Limit: 5)'/>
                                                    </ListItemButton>
                                                    <AddRef onOpen={ref} 
                                                    onCloseModal={closeRef} 
                                                    catName={catItem.category}
                                                    testName={nameItem.name}
                                                    name_id={nameItem.id}/>
                                                </ListItem>
                                            ):(
                                                <ListItemText secondary='No references can be added at this time'/>
                                            )}
                                            
                                            </Collapse>
                                        }/>
                                            {open[nameItem.name] ? 
                                            <Button onClick={() => handleOpenRef(nameItem.name)}><ExpandLess/></Button>
                                            : <Button onClick={() => handleOpenRef(nameItem.name)}><ExpandMore/></Button>}
                                           
                                    </ListItem>
                                ))}
                            
                            </List>
                        ))                       
                        : jsonData.map((catItem) => (
                                <List disablePadding>
                                    
                                    {catItem.testNames.map((nameItem) => (
                                        <ListItem key={nameItem.name} 
                                        
                                        sx={{borderBottom: 1, borderColor:'grey.300', marginX:'10px'}}>
                                            <ListItemText primary={nameItem.name}
                                            secondary={
                                                <Collapse in={open[nameItem.name]} timeout='auto' unmountOnExit>
                                                
                                                <List  disablePadding>
                                                {nameItem.references.map((refItem, refItemIndex) => (
                                                   <ListItem key={refItemIndex}>
                                                    <ListItemText secondary={refItem.ref}/>
                                                    </ListItem>
                                                    
                                                ))}
                                                </List>
                                                {(nameItem.references.length) < 5  ? (
                                                <ListItem> 
                                                    <ListItemButton onClick={addRef}>
                                                    <Add fontSize='small'/>
                                                    <ListItemText secondary='Add Reference (Limit: 5)'/>
                                                    </ListItemButton>
                                                    <AddRef onOpen={ref} 
                                                    onCloseModal={closeRef} 
                                                    catName={catItem.category}
                                                    testName={nameItem.name}
                                                    name_id={nameItem.id}/>
                                                 </ListItem>
                                            ):(
                                                <ListItemText secondary='No references can be added at this time'/>
                                            )}  
                                                                                          
                                                </Collapse>
                                            }
                                            />
                                            {open[nameItem.name] ? 
                                            <Button onClick={() => handleOpenRef(nameItem.name)}><ExpandLess/></Button>
                                            : <Button onClick={() => handleOpenRef(nameItem.name)}><ExpandMore/></Button>}
                                        </ListItem>

                                    ))}
                                 
                                </List>
                        ))}
                        
                        <ListItemButton onClick={openNewTest}>
                            <Add fontSize='small'/>
                            <ListItemText sx={{fontStyle:'italic'}} primary="Add New Test..."/>
                            
                        </ListItemButton>
                        <AddName openName={openTest} closeName={closeNewTest}/>
                        
                    </div>
            </Box></>}

        </Stack>
    );
}

export default ListView;

