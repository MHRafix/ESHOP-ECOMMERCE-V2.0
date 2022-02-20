import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setProducts, setWishListProducts } from "../redux/actions/productActions";

const useGet = (url) => {
    const [ loading, setLoading ] = useState(false);
    const dispatch = useDispatch();
    const getProducts = async () => {
        setLoading(true);
        const res = await axios.get(`https://rocky-bastion-69611.herokuapp.com/${url}`).catch((err) => {
            console.log("Error", err);
        });
        
        if(url === "getFromCartList"){
            dispatch(setWishListProducts(res.data));
        }else if(url === "getFromWishList"){
            dispatch(setWishListProducts(res.data));
        }else if(url === "allProductsForCatAndSizes"){}else{
            dispatch(setProducts(res.data));
        }
        setLoading(false);

        
    }

    useEffect(() => {
        getProducts();
    }, [url]);
    return { loading };
};

export default useGet;