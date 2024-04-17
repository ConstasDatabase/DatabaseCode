import { Modal, Button, Box, Typography } from "@mui/material";
import { useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    height: '45vh',
    borderColor: 'grey.300',
    backgroundColor:'white',
    boxShadow: 25,
    p: 4,
    flexGrow:1,
    flexDirection:'column',
    overflow:'hidden',
    overflowY:'scroll',
    overflowX:'scroll',
    alignItems:'center',
    justifyContent: 'center',
  };

  export default function ShowAbout ({getOpen, getClose}) {

    return (
        <Modal open={getOpen} close={getClose}>
            <Box sx={style}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', width:'95%', height:'20%'}}>
                    <Typography variant="h5">
                        About this website
                    </Typography>
                </div>

                <div style={{display:'flex', flexDirection:'column', width:'95%', height:'60%', overflow:'hidden', overflowY:'scroll'}}>
                    
                    <Typography variant="body1">
                        Dear All, 
                        
                    </Typography>
                    <Typography variant="body1">
                        In a rapidly growing usage of software for doing almost everything in science, we often face the challenge on whether or not the software is bug free. Testing the software before we use it for a specific study is an essential part of our work in computational chemistry. Over the years, many groups may have developed test cases for testing the software. This database intends to bring this experience together, so a broader group of scientists can access these tests, and use them for testing the reliability of a software. At this stage this database will initially gather tests in the field of computational chemistry and physics. We hope that you will contribute to this effort.
                    </Typography>
                    
                </div>

                <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', width:'95%', height:'20%'}}>
                    <Button onClick={getClose}> Close </Button>
                </div>

            </Box>
        </Modal>
    )
  }