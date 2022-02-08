import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Table from '../CheckoutTable/Table';

const Form = () => {
    // Import react hook form functionality here
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data); 
    
    const [districts, setDistricts] = useState([]);
    useEffect(() => {
        fetch("http://bdapis.herokuapp.com/api/v1.1/districts")
        .then(res => res.json())
        .then(data => setDistricts(data.data));
    }, []);

    return (
        <div className="userInformationForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Billing Details</h2> <br />
                <Grid container sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Grid item xs={12} md={6} sx={{width: '58%'}}>
                <label>First Name*</label> <br />
                <input
                id="inputFiled"
                type="text"
                {...register("firstName", { required: true, maxLength: 20 })} required/> <br />
                   
                <label>Last Name*</label><br />
                <input 
                id="inputFiled" 
                type="text" 
                {...register("lastName", {required: true})} required/><br />

                <label>Email*</label><br />
                <input 
                id="inputFiled" 
                type="email" 
                {...register("email", {required: true })} required/><br />

                <label>Phone*</label><br />
                <input 
                id="inputFiled" 
                type="number" 
                {...register("phoneNumber", {required: true})} required/> <br />
                
                <label>District*</label><br />
                <select
                id="inputFiled"
                style={{width: "99%"}}
                {...register("district", {required: true })}
                >
                <option selected>Select your district</option>
                {districts.map(district => <option value={district.district}>{district.district}</option>)}
                </select><br />
                
                <label>Street/Village*</label><br />
                <input 
                id="inputFiled" 
                type="text" 
                {...register("streetVillage", {required: true })} required/><br />

                <label>Note</label><br />
                <textarea 
                id="inputFiled" 
                type="text" 
                {...register("customerNote")}>
                </textarea><br />
                </Grid>
                <Grid xs={12} md={5}sx={{width: '38%'}}>
                    <Table />
                    <button className="btnButton" type="submit">Place Order</button>
                </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default Form;