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
          fontWeight: 400,
          fontSize: "14px",
          letterSpacing: "1px",
        }}
      >
        {success ? alertText : updateText}
      </Alert>
    </Snackbar>
  );
};

export default FancyAlert;
