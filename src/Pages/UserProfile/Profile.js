import React, { useState } from 'react';
import useAuth from '../../CustomHooks/useAuth';
import Container from '@mui/material/Container';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import MyOrders from './MyAllOrders/MyOrders';
import {useHistory} from 'react-router-dom';

export default function Profile() {
    // Take a history state for routing
    const history = useHistory();

    // Import useAuth from context api
    const {user, handleSignOut } = useAuth();

    // Prevent fake user here
    if(!user?.email){
        history.replace('/userAccount/user/login')
    }

    // Tabs controll function here
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    console.log(user.displayName);

  return (
    <section>
        <Container>
            <div className="pofileArea">
                <div className='userIntro'>
                    <div className="profileHolderImage">
                        <img src={user?.photoURL ? user?.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU'} alt="profilePicture" />
                    </div>
                    <div className="nameOfUser">
                         <h2 className="userName">{user?.displayName ? user?.displayName?.toUpperCase() : "Hablu Custommer"}</h2>
                        <button className="logoutBtn" onClick={handleSignOut}>Signout</button>
                    </div>
                </div>
                <div className="profiledetailsHere">
                <Box sx={{ width: '100%' }} mt={2}>
                      <TabContext value={value}>
                        <div className="tabs" style={{ width: '100%', margin: 'auto', textAlign: 'center'}}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center'}} >
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab sx={{ fontSize: {xs: 11, md: 15}, fontWeight: 400, fontFamily: 'Poppins' }} typography="h3" label="My Orders" value="1" />
                                <Tab sx={{ fontSize: {xs: 11, md: 15}, fontWeight: 400, fontFamily: 'Poppins' }} typography="h3" label="Canceled Orders" value="3" />
                                <Tab sx={{ fontSize: {xs: 11, md: 15}, fontWeight: 400, fontFamily: 'Poppins' }} typography="h3" label="Edit Profile" value="2" />
                                </TabList>
                            </Box>
                        </div>
                        <TabPanel value="1"><MyOrders /></TabPanel>
                        {/* <TabPanel value="2"><BasicProducts /></TabPanel> */}
                        {/* <TabPanel value="3"><DiscountProducts /></TabPanel> */}
                       </TabContext>
                    </Box>
                </div>
            </div>
        </Container>
    </section>
  )
}
