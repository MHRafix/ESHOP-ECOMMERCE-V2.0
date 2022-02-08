import { TabList, TabPanel } from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import React, { useState } from 'react';
import BasicProducts from './TabsProducts/BasicProducts/BasicProducts';
import NewProducts from './TabsProducts/NewArrival/NewProducts';
import DiscountProducts from './TabsProducts/SaleProducts/DiscountProducts';

const Products = () => {
    // Tabs controll function here
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    return (
        <section>
            <Container>
                <div className="productsTabsWrapper">
                    <div className="areaTitle">
                        <Typography sx={{ fontSize: 40, fontWeight: 'bold', fontFamily: 'Poppins', textAlign: 'center'}}>
                            DAILY DEALS!
                        </Typography>
                    </div>
                    <Box sx={{ width: '100%' }} mt={2}>
                      <TabContext value={value}>
                        <div className="tabs" style={{ width: '100%', margin: 'auto', textAlign: 'center'}}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center'}} >
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab sx={{ fontSize: {xs: 11, md: 15}, fontWeight: 400, fontFamily: 'Poppins' }} typography="h3" label="New Arrival" value="1" />
                                <Tab sx={{ fontSize: {xs: 11, md: 15}, fontWeight: 400, fontFamily: 'Poppins' }} typography="h3" label="Basic Products" value="2" />
                                <Tab sx={{ fontSize: {xs: 11, md: 15}, fontWeight: 400, fontFamily: 'Poppins' }} typography="h3" label="Sale Products" value="3" />
                                </TabList>
                            </Box>
                        </div>
                        <TabPanel value="1"><NewProducts /></TabPanel>
                        <TabPanel value="2"><BasicProducts /></TabPanel>
                        <TabPanel value="3"><DiscountProducts /></TabPanel>
                       </TabContext>
                    </Box>
                </div>
            </Container>
        </section>
    );
};

export default Products;