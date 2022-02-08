import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Facility1 from '../../../Images/ICONS/f1.png';
import Facility2 from '../../../Images/ICONS/f2.png';
import Facility3 from '../../../Images/ICONS/f3.png';
import Facility4 from '../../../Images/ICONS/f4.png';

const Facilities = () => {
    return (
        <section>
            <Container>
                 <div className="facilities">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3} my={2}>
                            <Grid className="facilityWrapper" container>
                                <Grid item xs={3} md={3}>
                                    <img className="facilityIcon" src={Facility1} alt="facilitiesIcon" />
                                </Grid>
                                <Grid item xs={9} md={9}>
                                    <Typography variant="h5" sx={{ fontWeight: 500, fontFamily: 'Poppins' }}>
                                      Free Shipping
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 400, fontFamily: 'Poppins' }}>
                                     Free shipping on all order
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={3} my={2}>
                            <Grid className="facilityWrapper" container>
                                <Grid item xs={3} md={3}>
                                    <img className="facilityIcon" src={Facility2} alt="facilitiesIcon" />
                                </Grid>
                                <Grid item xs={9} md={9}>
                                    <Typography variant="h5" sx={{ fontWeight: 500, fontFamily: 'Poppins' }}>
                                        Support 24/7
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 400, fontFamily: 'Poppins' }}>
                                        Support 24 hours a day
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={3} my={2}>
                            <Grid className="facilityWrapper" container>
                                <Grid item xs={3} md={3}>
                                    <img className="facilityIcon" src={Facility3} alt="facilitiesIcon" />
                                </Grid>
                                <Grid item xs={9} md={9}>
                                    <Typography variant="h5" sx={{ fontWeight: 500, fontFamily: 'Poppins' }}>
                                        Money Return
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 400, fontFamily: 'Poppins' }}>
                                        30 days for free return
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={3} my={2}>
                            <Grid className="facilityWrapper" container>
                                <Grid item xs={3} md={3}>
                                    <img className="facilityIcon" src={Facility4} alt="facilitiesIcon" />
                                </Grid>
                                <Grid item xs={9} md={9}>
                                    <Typography variant="h5" sx={{ fontWeight: 500, fontFamily: 'Poppins' }}>
                                        Order Discount
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 400, fontFamily: 'Poppins' }}>
                                        10% off on your first order
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </section>
    );
};

export default Facilities;