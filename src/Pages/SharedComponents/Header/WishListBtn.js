import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Badge } from '@mui/material';
import React from 'react';

const WishListBtn = () => {
    // Import data from custom hooks
    // const {gotData} = useGet('getFromWishList');
    // const gotData = useSelector((state) => state.wishlistAllProducts.wishlistProducts);
    // const dispatch = useDispatch();
    // const getProducts = async () => {
    //     const res = await axios.get('https://rocky-bastion-69611.herokuapp.com/getFromWishList').catch((err) => {
    //         console.log("Error", err);
    //     });

    //     dispatch(setWishListProducts(res.data));
        
    // }

    // useEffect(() => {
    //     getProducts();
    // }, []);

    return (
        <Badge badgeContent={12} color="secondary">
            <FavoriteBorderOutlinedIcon />
        </Badge>
    );
};

export default WishListBtn;