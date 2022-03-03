import axios from "axios";
import { useState } from "react";

const usePost = () => {
    const [ posting, setPosting ] = useState(false);
    const [ success, setSuccess ] = useState(false); 
    const [ alertText, setAlertText ] = useState(''); 

    const handlePost = (data, url) => {
        setPosting(true);
        const postUrl = `https://eshopy-server.herokuapp.com/${url}`;
        axios.post(postUrl, data)
        .then(res => {
          if(res.data.insertedId){
            if(url === "addToCartList"){
              setAlertText('Product successfully added to cart!');
            }else if(url === "allCustomersOrders"){
              setAlertText('Thank you for your order!')
            }else{
              setAlertText('Product successfully added to wish list!');
            }
            setPosting(false);
            setSuccess(true);
           }
        })
  
  };

    return { handlePost, posting, success, setSuccess, alertText };
};

export default usePost;