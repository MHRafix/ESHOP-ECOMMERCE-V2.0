import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Badge } from '@mui/material';
import React from 'react';
import useGet from '../../../CustomHooks/useGet';

const WishListBtn = () => {
    // Import data from custom hooks
    const {gotData} = useGet('getFromWishList');
    
    return (
        <Badge badgeContent={gotData.length} color="secondary">
            <FavoriteBorderOutlinedIcon />
        </Badge>
    );
};

export default WishListBtn;