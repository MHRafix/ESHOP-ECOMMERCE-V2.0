import axios from "axios";
import { useState } from "react";

const useUpdate = () => {
  const [updating, setUpdating] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [updateText, setUpdateText] = useState("");

  const handleUpdating = (data, url) => {
    console.log(url, data);

    setUpdating(true);
    const postUrl = `https://eshopy-server.herokuapp.com/${url}`;
    axios.put(postUrl, data).then((res) => {
      if (res?.data?.result?.n === 1) {
        setUpdateText("Product successfully updated!");
        setUpdating(false);
        setUpdated(true);
      }
    });
  };
  return { handleUpdating, updating, updated, setUpdated, updateText };
};

export default useUpdate;
