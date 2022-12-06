import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '80vh',
  overflowX: 'auto',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

function SingleOrderDetailsModal({open, data, setOpen}) {
    // Let's destructuring data from data object
    const {_id, customerInfo, orderedProducts, userEmail} = data;
    const {firstName, lastName, customerValidEmail, phoneNumber, district, streetVillage, customerNote } = customerInfo;
  return (
    <>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
          <Box sx={style}>
            <Typography id="spring-modal-title" sx={{textAlign: 'right', position: 'fixed', top: '5px', left: '5px', zIndex: '222'}}>
              <button className="crossBtn" onClick={() => setOpen(false)}>&times;</button>
            </Typography>
            <Typography sx={{fontFamily: 'Poppins', fontSize: '25px', fontWeight: '700', textAlign: 'center'}}>
              <h3 style={{fontSize: '20px'}}>
                Order History Of <span style={{color: 'var(--btn-bg)', fontSize: '20px'}}>"ORDER_ID_{_id.slice(10, 15)}"</span>
              </h3>
            </Typography>
              <br />
              <button className="orderActions"><FileDownloadIcon /> &nbsp;Download PDF History</button>
              <br />
              <br />
            <Grid container>
              <Grid item md={7} xs={12} sx={{borderRight: '1px solid #ccc', paddingRight: '30px'}}>
                <div className="areaTitle">
                  <h3>Ordered Products</h3>
                </div>
                <div calssName="allOrderedProductsWrapper">
                  {orderedProducts.map(product => <div className="singleOrderedProduct">
                    <div className="orderedProductsImageArea" style={{textAlign: 'left'}}>
                      <img className="orderedProductImage" src={product?.cartedProduct?.thumbnail} alt="orderedProductsImage"/>
                    </div>
                    <div className='orderedProductsTitle' style={{textAlign: 'center'}}>
                      <h3 className='producTitle'>{product?.cartedProduct?.productTitle}</h3>
                      <span className="price">Price: &nbsp; $ {product?.cartedProduct?.salePrice}</span> <br />
                      <span className="quantity">QTY: &nbsp; {product?.quantity} P</span>
                    </div>
                    <div className="orderedProductsSubTotalPrice" style={{textAlign: 'right'}}>
                      <span className="subTotalPrice">$ {Number(product?.cartedProduct?.salePrice) * Number(product?.quantity)}</span>
                    </div>
                  </div>)}
                </div>
              </Grid>
              <Grid item md={5} xs={12} sx={{borderLeft: '1px solid #ccc', paddingLeft: '30px'}}>
                <div className="areaTitle">
                  <h3>Your Provided Info</h3>
                </div> <br />
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <span>Your Name</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <span>
                      {firstName + ' ' + lastName}
                    </span>
                  </AccordionDetails>
                </Accordion> <br />
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <span>Your Cell</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <span>
                      {phoneNumber}
                    </span>
                  </AccordionDetails>
                </Accordion><br />
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <span>Your Valid Email</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <span>
                      {customerValidEmail}
                    </span>
                  </AccordionDetails>
                </Accordion><br />
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <span>Your Acc Email</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <span>
                      {userEmail}
                    </span>
                  </AccordionDetails>
                </Accordion><br />
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <span>Your Address</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <span>
                      {district + ' ' + streetVillage}
                    </span>
                  </AccordionDetails>
                </Accordion><br />
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <span>Your Notes</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <span>
                      {customerNote ? customerNote : 'No notes here...!'}
                    </span>
                  </AccordionDetails>
                </Accordion><br />
              </Grid>
            </Grid>
          </Box>
      </Modal>
    </>
  );
}

export default SingleOrderDetailsModal;