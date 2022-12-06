import { Container, Grid } from '@mui/material';
import React from 'react';
import Form from './Form/Form';

const Checkout = () => {
    return (
        <section>
            <Container>
                <Grid container>
                    <Grid item md={12} xs={12}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Checkout;