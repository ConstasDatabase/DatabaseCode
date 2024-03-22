import { Typography, AppBar, Box, Button, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { AccountCircle } from '@mui/icons-material';
import App from './App';


//Switch appbar position to fixed if the appbar needs to be visible all the time or let it be static otherwise

/*

    const closeDatabase = () => {
        setHomeState(true);
        setDbState(false);
    };

    const openDatabase = () => {
        setDbState(true);
        setHomeState(false);
    };
{label: 'Home', onClick:closeDatabase},
                     {label:'Database', onClick: openDatabase }, 
        dbState && <App />}
        {homeState && <HomePage/>}
*/
                       

const barTheme = createTheme({
  palette: {
    barColour: {
      main: purple[900],
      switch: purple[600]
    },
    neutral: {
      main: purple[50]
    }
  }
});






function SiteBar () {

    
    const closeAccount = () => {
        console.log("void");
        
      };
    


    const options = [
                     {label:'About', onClick:closeAccount},
                     {label:'Help', onClick:closeAccount}];


    const db_name = ['Constas Research Lab'];
    
    return (
        <div className='App'>
        <ThemeProvider theme={barTheme}>
            <AppBar position='static' color='barColour'> 
                <Container maxWidth='xl'>
                
                    <Box sx={{display:'flex', justifyContent:'space-between', width:'100%', alignContent:'center'}}>
                    <Typography variant='h4' color='neutral' sx={{color:'white', px:1, py:1, 
                        textTransform:'capitalize'}}> 
                        { db_name }
                    </Typography>

                        {/*<div>
                            {options.map((option, index) => (
                                <Button key={ index } 
                                onClick={option.onClick}
                                sx={{color:'white',
                                py:2,
                                px:2,
                                fontSize: 17,
                                fontWeight:'medium',
                                textTransform:'capitalize',
                                '&:hover':{backgroundColor: 'barColour.switch', opacity: [0.9, 0.8, 0.7]}
                                }}>
                                    { option.label }
                                   
                                </Button>
                            ))}
                            <Button sx={{px: 2, py: 2, color: 'white',
                                '&:hover':{backgroundColor: 'barColour.switch', opacity: [0.9, 0.8, 0.7]}}}>

                            <AccountCircle fontSize='medium'/>
                            
                            </Button>
                            
                            </div>*/}
                        
                    </Box>
                </Container>
            </AppBar>
            
        </ThemeProvider>
        <App/>
        </div>
        
    );
}

export default SiteBar;

