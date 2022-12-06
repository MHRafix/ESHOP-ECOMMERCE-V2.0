import { Grid } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

const Table = ({ totalPrice }) => {
  const history = useHistory();

  if (totalPrice === 0) {
    history.replace("shop");
  }
  return (
    <Grid container sx={{ marginTop: "100px", marginBottom: "50px" }}>
      <Grid
        item
        md={12}
        xs={12}
        sx={{
          fontSize: "25px",
          fontWeight: 700,
          fontFamily: "Poppins",
          marginBottom: "20px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "10px",
        }}
      >
        Your Payment
      </Grid>
      <Grid item md={8} xs={8}>
        Shipping:
      </Grid>
      <Grid item md={4} xs={4} sx={{ textAlign: "right" }}>
        Free shipping
      </Grid>{" "}
      <br /> <br />
      <Grid item md={8} xs={8}>
        Total amount:
      </Grid>
      <Grid item md={4} xs={4} sx={{ textAlign: "right" }}>
        $ {Math.ceil(totalPrice)}
      </Grid>
    </Grid>
  );
};

export default Table;
