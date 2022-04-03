import axios from "axios";
import { useState } from "react";

const useUpdate = () => {
  const [updated, setUpdated] = useState(false);
  const [updateText, setUpdateText] = useState("");

  const handleUpdating = (url) => {
    const postUrl = `https://eshopy-server.herokuapp.com/${url}`;
    axios.patch(postUrl).then((res) => {
      if (res?.data?.result?.n === 1) {
        if (url.slice(0, 9) === "addReview") {
          setUpdateText("Review successfully added!");
        } else {
          setUpdateText("Cart successfully updated!");
        }
        setUpdated(true);
      }
    });
  };
  return { handleUpdating, updated, setUpdated, updateText };
};

export default useUpdate;
