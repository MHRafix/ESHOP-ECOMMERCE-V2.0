import { Box, Grid, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import Banner from '../../../Images/PRODUCT-IMAGES/4.jpg';

const NewsLetterModal = () => {
    const [open, setOpen] = useState('false');

    function showModal(){
        setOpen('true');
    }
    if(open === 'false'){
        setTimeout(showModal, 5000);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        outline: 'none',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '50vh',
        overflowX: 'auto',
        bgcolor: 'background.paper',
        border: 'none',
        borderRadius: '10px',
        boxShadow: 24,
        p: 4,
    };
    return (
        <>
        <Modal
        open={open === 'true'}
        // onClose={handleClose}
        >
        <Box sx={style}>
            <div className="newsLetterWrapper">
            <button className="crossBtn" onClick={() => setOpen('dismiss')}>&times;</button> <br /> <br />
                <Grid container sx={{justifyContent: 'space-between'}}>
                    <Grid item md={6} xs={6}>
                        <Typography variant="h1"  component="h2" sx={{ fontSize: '17px', fontFamily: 'Poppins', fontWeight: 400}}>
                            Please subscribe our news letter for more update!
                        </Typography>
                        <input type="email" id='inputFiled' placeholder='Enter your email here...' /> <br />
                        <button className="btnButton">Subscribe</button>
                    </Grid>
                    <Grid item md={6} xs={6}>
                        <img src={Banner} height="100%" width="200px" alt="BANNER" />
                    </Grid>
                </Grid>
            </div>
        </Box>
        </Modal>
        </>
    );
};

export default NewsLetterModal;