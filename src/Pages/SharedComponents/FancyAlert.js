import { Alert, Snackbar } from "@mui/material";
import React from "react";

const FancyAlert = ({ success, updated, alertText, updateText }) => {
  return (
    <Snackbar open={success || updated}>
      <Alert
        severity="success"
        sx={{
          width: "100%",
          background: "rgb(46 125 50)",
          color: "white",
          fontFamily: "Poppins",
          fontWeight: 300,
          fontSize: "10px",
        }}
      >
        <span style={{ fontSize: "12px!important" }}>
          {success ? alertText : updateText}
        </span>
      </Alert>
    </Snackbar>
  );
};

export default FancyAlert;
