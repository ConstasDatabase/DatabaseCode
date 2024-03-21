import { Modal, Typography, Box, Button, TextField, MenuItem, Checkbox } from "@mui/material";
import { useState, useEffect } from "react";
//import PostDataStruct from "./api/PostCatAxios";
import {PostRefStruct} from "./PostRefAxios";
//change width to 75 and height to 80 later on.

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    height: '70vh',
    borderColor: 'grey.300',
    backgroundColor:'white',
    boxShadow: 20,
    p: 4,
    flexDirection:'column',
    display:'flex',
    overflow:'hidden',
    overflowY:'scroll',
    overflowX:'scroll',
    alignItems:'center',
  };

const refStyles = [
    {value:"Book"},
    {value:"Journal"},
    {value:"Website"}
];

const months = [
    {value:"January"},
    {value:"February"},
    {value:"March"},
    {value:"April"},
    {value:"May"},
    {value:"June"},
    {value:"July"},
    {value:"August"},
    {value:"September"},
    {value:"October"},
    {value:"November"},
    {value:"December"}
];

function AddRef ({onOpen, onCloseModal, catName, testName, name_id}){

    const [selection, setSelection] = useState('');
    const [link, setLink] = useState('');
    const [authors, setAuthors] = useState('');
    const [year, setYear] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [publisher, setPublisher] = useState('');
    const [volume, setVolume] = useState('');
    const [issue, setIssue] = useState('');
    const [pages, setPages] = useState('');

    const [checked, setChecked] = useState(false);

    const [maintitle, setMaintitle] = useState('');
    const [subtitle, setSubtitle] = useState('');

    const [tempYear, setTempYear] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');

    const [pageRange, setPageRange] = useState('');
    const [pageEnd, setPageEnd] = useState('');
    

    const savePost = () => {
        console.log(selection);
        if(link === ''){
            setLink('None')
        }
        if(year === ''){
            setYear('None')
        }
        if(email === ''){
            setEmail('None')
        }
        if(title === ''){
            setTitle('None')
        }
        if(publisher === ''){
            setPublisher('None')
        }
        if(volume === ''){
            setVolume('None')
        }
        if(issue === ''){
            setIssue('None')
        }
        if(pages === ''){
            setPages('None')
        }
        PostRefStruct(link, year, email, title, publisher, volume, issue, pages, authors, selection, name_id);
    }

    const handleSelect = (event) => {
        setSelection(event.target.value);
        setLink('')
        setAuthors('')
        setYear('')
        setEmail('')
        setTitle('')
        setPublisher('')
        setVolume('')
        setIssue('')
        setPages('')
        setMaintitle('')
        setSubtitle('')
        setTempYear('')
        setMonth('')
        setDay('')
        setPageEnd('')
        setPageRange('')
    }
    
    const handleCheckbox = (event) => {
        setChecked(event.target.checked)
        setYear(event.target.checked ? 'n.d.' : year)
    }

    useEffect(() => {
        if(subtitle !== ''){
            setTitle(`${maintitle}(${subtitle})`)
        }else{
            setTitle(`${maintitle}`)
        }
      }, [maintitle, subtitle]);

    useEffect(() => {
        if(day !== '' && month !== ''){
            setYear(`${tempYear}, ${month.trim()} ${day.trim()}`)
        }else{
            setYear(`${tempYear}`)
        }
      }, [tempYear, month, day, setYear]);

    useEffect(() => {
        if(pageEnd !== ''){
            setPages(`${pageRange}-${pageEnd}`)
        }else{
            setPages(`${pageRange}`)
        }
      }, [pageRange, pageEnd]);


    return(
        
        <Modal open={onOpen} onClose={onCloseModal}>
            <Box sx={style}>
                <Typography variant="h6">
                    Category: {catName} Test: {testName}
                </Typography>
                <div style={{display:'block', width:'95%', alignItems:'center', whiteSpace:'pre-line'}}>
                    <Typography variant="body2">
                        <span style={{marginRight:'4px'}}>
                            Preview: 
                        </span>
                        {authors !== '' && (<span style={{marginRight:'4px'}}>
                            {authors + '.'} 
                        </span>)}
                        {year !== '' && (<span style={{marginRight:'4px'}}>
                            {'(' + year + ').'}
                        </span>)}
                        {title !== '' && (<span style={{marginRight:'4px'}}>
                            {title + '.'} 
                        </span>)}
                        {publisher !== '' && (<span style={{marginRight:'4px', fontStyle:'italic'}}>
                            {publisher + ','} 
                        </span>)}
                        {(volume !== '' && issue === '') && (<span style={{fontStyle:'italic'}}>
                            {volume + ','} 
                        </span>)}
                        {(volume !== '' && issue !== '') && (<span style={{fontStyle:'italic'}}>
                            {volume} 
                        </span>)}
                        {issue !== '' && (<span>
                            {'(' + issue + '),'} 
                        </span>)}
                        {pages !== '' && (<span  style={{marginLeft:'4px', marginRight:'4px'}}>
                            {pages + '.'} 
                        </span>)}
                        {link !== '' && (<span>
                            {link + '.'} 
                        </span>)}
                    </Typography>
                </div>
                

            
                <TextField
                    id="filled-select"
                    select
                    label="Select Reference Type"
                    defaultValue="Book"
                    value={selection}
                    onChange={handleSelect}
                    variant="filled"
                    sx={{width:'30%', marginTop:"1%"}}
                    >
                    {refStyles.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                    ))}
                </TextField>
                
                {(selection === "Book"|| selection === "Journal" || selection === "Website")&&(
                    
                        <TextField
                            select
                            label="Select Number of Authors"
                            variant="filled"
                            sx={{width:'30%', marginTop:'1%'}}>
                            {[1, 2, 3, 4, 5, '6+'].map((num) => (
                            <MenuItem key={num} value={num}>{num}</MenuItem>
                            ))}
                        </TextField>
                    
                )}

                
                {(selection === "Book"|| selection === "Journal" || selection === "Website")&&(
                    <div style={{marginTop:'1%', width:'95%'}}>
                        <TextField
                            id="filled-author-lname"
                            label="Author Last Name"
                            variant="filled"
                            sx={{marginRight:'2%', width:'38%'}}
                        />
                        <TextField
                            id="filled-author-lname"
                            label="Author First Name"
                            helperText="1 Character Limit"
                            variant="filled"
                            InputProps={{
                                inputProps: {
                                maxLength: 1
                                }}}
                            
                            sx={{marginRight:'2%', width:'29%'}}
                        />
                        <TextField
                            id="filled-author-lname"
                            label="Author Middle Name"
                            helperText="1 Character Limit"
                            variant="filled"
                            InputProps={{
                                inputProps: {
                                maxLength: 1
                                }}}
                            value={authors}
                            onChange={(e) => setAuthors(e.target.value)}
                            sx={{width:'29%'}}
                        />
                    </div> 
                )}

                

                {(selection === "Book"|| selection === "Journal" || selection === "Website")&&(
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                        <Checkbox
                            checked={checked}
                            onChange={handleCheckbox}
                            />
                        <Typography variant="body2"> No Date? </Typography>
                    </div>
                )}


                
                {(selection === "Book"|| selection === "Journal")&&(
                    <div style={{marginTop:'1%', width:'95%', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                        <TextField
                            id="public-year"
                            label="Publication Year"
                            variant="filled"
                            type="number"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            InputProps={{
                                inputProps: {
                                min: 0
                                }}}
                            sx={{width: '32%', marginTop:'1%'}}
                        />
                    </div>
                )}
                {(selection === "Website")&&(
                    <div style={{marginTop:'1%', width:'95%'}}>
                        <TextField
                            id="public-year"
                            label="Publication Year"
                            variant="filled"
                            type="number"
                            value={tempYear}
                            onChange={(e) => setTempYear(e.target.value)}
                            InputProps={{
                                inputProps: {
                                min: 0
                                }}}
                            sx={{width: '32%', marginRight:'2%'}}
                        />
                        <TextField
                            id="filled-select"
                            select
                            label="Publication Month"
                            defaultValue="January"
                            variant="filled"
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                            sx={{width:'32%', marginRight:'2%'}}
                            >
                            {months.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="public-day"
                            label="Publication Day"
                            variant="filled"
                            type="number"
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                            InputProps={{
                                inputProps: {
                                min: 1,
                                max: 31
                                }}}
                            sx={{width: '32%'}}
                        />
                    </div>
                )}
                

                {(selection === "Journal" || selection === "Website")&&(<TextField
                    id="filled-doctitle"
                    label="Document Title"
                    helperText="Required"
                    required
                    variant="filled"
                    value={maintitle}
                    onChange={(e) => setMaintitle(e.target.value)}
                    sx={{width:'95%', marginTop:"1%"}}
                />)} 

                {(selection === "Book")&&(
                    <div style={{width:'95%'}}>
                        <TextField
                            id="filled-doctitle"
                            label="Document Title"
                            helperText="Required"
                            required
                            variant="filled"
                            value={maintitle}
                            onChange={(e) => setMaintitle(e.target.value)}
                            sx={{width:'48%', marginTop:"1%", marginRight:'2%'}}
                        />
                        <TextField
                            id="filled-doctitle"
                            label="Subtitle"
                            helperText="Optional"
                            variant="filled"
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                            sx={{width:'48%', marginTop:"1%"}}
                        />
                    </div>
                )} 

                {(selection === "Book"|| selection === "Journal")&&(<TextField
                    id="filled-publisher"
                    label="Publisher"
                    variant="filled"
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                    sx={{width:'95%', marginTop:"1%"}}
                />)} 

                {(selection === "Website")&&(<TextField
                    id="filled-webname"
                    label="Website Name"
                    variant="filled"
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                    sx={{width:'95%', marginTop:"1%"}}
                />)} 
                {(selection === "Journal")&&(
                    <div style={{marginTop:'1%', width:'95%'}}>
                        <TextField
                            id="public-vol"
                            label="Volume No."
                            variant="filled"
                            type="number"
                            value={volume}
                            onChange={(e) => setVolume(e.target.value)}
                            InputProps={{
                                inputProps: {
                                min: 0
                                }}}
                            sx={{width: '32%', marginRight:'2%'}}
                        />
                        <TextField
                            id="public-issue"
                            label="Issue No."
                            variant="filled"
                            type="number"
                            value={issue}
                            onChange={(e) => setIssue(e.target.value)}
                            InputProps={{
                                inputProps: {
                                min: 0
                                }}}
                            sx={{width: '32%', marginRight:'2%'}}
                        />
                        <TextField
                            id="public-day"
                            label="Page No."
                            helperText="Enter start page"
                            variant="filled"
                            type="number"
                            value={pageRange}
                            onChange={(e) => setPageRange(e.target.value)}
                            InputProps={{
                                inputProps: {
                                min: 1
                                }}}
                            sx={{width: '15%', marginRight:'2%'}}

                        />
                        <TextField
                            id="public-day"
                            label="End Page No."
                            helperText="Enter end page"
                            variant="filled"
                            type="number"
                            value={pageEnd}
                            onChange={(e) => setPageEnd(e.target.value)}
                            InputProps={{
                                inputProps: {
                                min: 1
                                }}}
                            sx={{width: '15%'}}
                            
                        />
                    </div>
                )}
               
                {(selection === "Book"|| selection === "Journal" || selection === "Website")&&(<TextField
                    id="filled-doiOrLink"
                    label="URL or DOI (If Applicable)"
                    variant="filled"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    sx={{width:'95%', marginTop:"1%"}}
                />)}       
            
                <div style={{marginTop:"1%"}}>
                    <Button onClick={savePost}> save </Button>
                    <Button onClick={onCloseModal}> close </Button>
                </div>
                

            </Box>
        </Modal>

        
    );
}

export default AddRef;
