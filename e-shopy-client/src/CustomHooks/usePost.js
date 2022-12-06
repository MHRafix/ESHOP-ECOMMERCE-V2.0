import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BASE_URI } from './BASE_URI';

const usePost = () => {
	const [success, setSuccess] = useState(false);
	const [alertText, setAlertText] = useState('');
	const wishlistProducts = useSelector(
		(state) => state?.wishlistAllProducts?.wishlistProducts
	);
	const handlePost = (data, url) => {
		if (url === 'addToWishList') {
			const wishId = data.cartedProduct._id;
			const exist = wishlistProducts.find(
				(product) => product.cartedProduct._id === wishId
			);
			if (exist) {
				alert('Product is already exist in wishlist!');
			} else {
				minimalistPosting(data, url, setAlertText, setSuccess);
			}
		} else {
			minimalistPosting(data, url, setAlertText, setSuccess);
		}
	};

	return { handlePost, success, setSuccess, alertText };
};

export default usePost;

// make a funtion for posting data to the database here
const minimalistPosting = (data, url, setAlertText, setSuccess) => {
	const postUrl = `${BASE_URI}/${url}`;
	axios.post(postUrl, data).then((res) => {
		if (res?.data?._id === 1) {
			if (url === 'addToCartList') {
				setAlertText('Product successfully added to cart!');
			} else if (url === 'allCustomersOrders') {
				setAlertText('Thank you for your order!');
			} else {
				setAlertText('Product successfully added to wish list!');
			}
			setSuccess(true);
		}
	});
};
