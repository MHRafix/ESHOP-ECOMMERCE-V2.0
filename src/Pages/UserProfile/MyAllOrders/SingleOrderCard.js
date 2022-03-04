import DeleteIcon from "@mui/icons-material/Delete";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Alert, Grid, Snackbar } from "@mui/material";
import React, { useState } from "react";
import useDelete from "../../../CustomHooks/useDelete";
import SingleOrderDetailsModal from "../../SharedComponents/Modals/SingleOrderDetailsModal";

export default function SingleOrderCard({ myOrder }) {
  const [detailsModal, setDetailsModal] = useState(false);

  // Let's destructuring data from the object
  const { _id, grandTotalPrice, customerInfo, status } = myOrder;

  // handle delete orders here
  const {
    deleting,
    handleDelete,
    deleteSuccess,
    setDeleteSuccess,
    deleteAlertText,
  } = useDelete();

  return (
    <>
      <Grid
        container
        sx={{ alignItems: "center", margin: "40px 0px 0px 0px" }}
        // data-aos="fade-up"
      >
        <Grid
          item
          onClick={() => setDetailsModal(true)}
          md={2.4}
          xs={2.4}
          sx={{
            dispaly: "block",
            width: "100%",
            textAlign: "center",
            color: "blue",
            cursor: "pointer",
            fontFamily: "Poppins",
            fontSize: {
              xs: 10,
              md: 14,
            },
          }}
        >
          {"ORDER_ID_" + " " + _id.slice(10, 15)}
        </Grid>
        <Grid
          item
          md={2.4}
          xs={2.4}
          sx={{
            textAlign: "center",
            color: "#555",
            fontFamily: "Poppins",
            fontSize: { xs: 10, md: 14 },
          }}
        >
          {customerInfo?.firstName + " " + customerInfo?.lastName}
        </Grid>
        <Grid
          item
          md={2.4}
          xs={2.4}
          sx={{
            textAlign: "center",
            color: "#555",
            fontFamily: "Poppins",
            fontSize: { xs: 10, md: 14 },
          }}
        >
          ${Math.ceil(grandTotalPrice)}
        </Grid>
        <Grid
          item
          md={2.4}
          xs={2.4}
          sx={{
            textAlign: "center",
            color: "#555",
            fontFamily: "Poppins",
            fontSize: { xs: 10, md: 14 },
          }}
        >
          <span className="orderStatus">{status}</span>
        </Grid>
        <Grid
          item
          md={2.4}
          xs={2.4}
          sx={{
            textAlign: "center",
            color: "#555",
            fontFamily: "Poppins",
            fontSize: { xs: 10, md: 14 },
          }}
        >
          <button className="orderActions">
            <FileDownloadIcon sx={{ fontSize: { xs: 14, md: 18 } }} /> &nbsp;PDF
          </button>
          <br />
          <button
            className="orderActions"
            style={{ background: "red", color: "#fff" }}
            onClick={() => handleDelete(`deleteOrders/${_id}`)}
          >
            <DeleteIcon sx={{ fontSize: { xs: 14, md: 18 } }} /> &nbsp;Order
          </button>
        </Grid>
      </Grid>
      <SingleOrderDetailsModal
        data={myOrder}
        open={detailsModal}
        setOpen={setDetailsModal}
      />
      <Snackbar open={deleteSuccess} autoHideDuration={6000}>
        <Alert
          severity="success"
          sx={{
            width: "100%",
            background: "rgb(46 125 50)",
            color: "white",
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: { xs: "13px", md: "18px" },
          }}
        >
          {deleteAlertText}
        </Alert>
      </Snackbar>
    </>
  );
}
