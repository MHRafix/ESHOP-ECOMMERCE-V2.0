import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeProduct,
  removeWishlistProduct,
} from "../redux/actions/productActions";

const useDelete = () => {
  const [deleting, setDeleting] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteAlertText, setDeleteAlertText] = useState("");
  const dispatch = useDispatch();

  // Handle delete booked package with confirmation window alert
  const handleDelete = (url, id) => {
    const cnfDel = window.confirm("Are you sure ?");
    if (cnfDel) {
      setDeleting(true);

      // remove from redux store depend on url
      const cutUrl = url.slice(0, 22);
      if (cutUrl === "deleteWishlistProducts") {
        dispatch(removeWishlistProduct(id));
      } else {
        dispatch(removeProduct(id));
      }

      const deleteUrl = `https://eshopy-server.herokuapp.com/${url}`;
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
