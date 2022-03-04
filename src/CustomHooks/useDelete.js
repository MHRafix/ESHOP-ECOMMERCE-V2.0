import axios from "axios";
import { useState } from "react";

const useDelete = () => {
  const [deleting, setDeleting] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteAlertText, setDeleteAlertText] = useState("");

  // Handle delete booked package with confirmation window alert
  const handleDelete = (url) => {
    const cnfDel = window.confirm("Are you sure ?");
    if (cnfDel) {
      setDeleting(true);

      // const deleteUrl = `https://eshopy-server.herokuapp.com/${url}`;
      const deleteUrl = `http://localhost:5000/${url}`;
      console.log(deleteUrl);
      axios
        .delete(deleteUrl)
        .then((res) => {
          if (res?.data?.result?.n === 1) {
            setDeleting(false);
            setDeleteAlertText("Product successfully deleted!");
            setDeleteSuccess(true);
          }
        })
        .catch((err) => {
          setDeleteAlertText(`Error: ${err.message}`);
        });
    }
  };

  return {
    deleting,
    handleDelete,
    deleteSuccess,
    setDeleteSuccess,
    deleteAlertText,
  };
};

export default useDelete;
