import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Badge } from '@mui/material';
import React from 'react';
import {useSelector} from 'react-redux';
import useGet from '../../../CustomHooks/useGet';
import useAuth from '../../../CustomHooks/useAuth';

const WishListBtn = () => {
    // Import current user data from context api
    const {user} = useAuth();

    // Import data from custom hooks
    const gotData = useSelector((state) => state.wishlistAllProducts.wishlistProducts);
    const {loading} = useGet(`getFromWishList/${user?.email}`);
    console.log(gotData);

    return (
        <Badge badgeContent={gotData?.length ? gotData?.length : '0'} color="secondary">
            <FavoriteBorderOutlinedIcon />
        </Badge>
    );
};

export default WishListBtn;