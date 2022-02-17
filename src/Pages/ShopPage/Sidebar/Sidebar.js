import { CircularProgress } from '@mui/material';
import Radio from '@mui/material/Radio';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useGet from '../../../CustomHooks/useGet';
const Sidebar = ({dpend}) => {
    const [ selectedCategory, setSelectedCategory ] = useState('all');
    const [ selectedSize, setSelectedSize ] = useState('all');
    const [ minPrice, setMinPrice ] = useState('0');
    const [ maxPrice, setMaxPrice ] = useState('10000');

    // Import product data from redux using custom hooks
    const gotData = useSelector((state) => state.allProducts.products);
    const { loading } = useGet('products');
    
    // Handle products categories here
    const handleChangeCategory = (event) => {
      if(event.target.value === 'all'){
          dpend('products');
          setSelectedSize('');
      }else{
          dpend(`products/${event.target.value}`);
          setSelectedSize('');
    }
    setSelectedCategory(event.target.value);
    };

    // Handle products sizes here 
    const handleChangeSizes = (event) => {
      if(event.target.value === 'all'){
          dpend('products');
          setSelectedCategory('');
      }else{
          dpend(`products/sizedProducts/${event.target.value}`);
          setSelectedCategory('');
    }
    setSelectedSize(event.target.value);
    };
    
    // Findout all categories
    let categoriesArr = ['all'];
    for(const data of gotData){
        if(categoriesArr.includes(data.category) === true){
            //Nothing here
        }else{
            categoriesArr.push(data.category);
        }
    }

    // Findout all sizes here
    let sizesArr = ['all'];
    for(const data of gotData){
        const sizes = data.sizes;
        for(const size of sizes){
            if(sizesArr.includes(size) === true){
                //Nothing here
            }else{
                sizesArr.push(size);
            }
        }
    }

    // Handle filter products by prices
    const handleFilterProductsByPrices = () => {
        if(!minPrice || !maxPrice){
            alert('Price fields are empty');
        }else if(Number(minPrice) < 0 || Number(maxPrice) > 10000){
            alert('Minimum amount is $0 and Maximum amount is $10000');
        }else if(Number(minPrice) > Number(maxPrice)){
            alert('Minimum price must be lower than maximum price...!')
        }else{
            dpend(`products/filteredProducts/${minPrice}/${maxPrice}`);
        }
    }
    return (
        <div className="sidebarArea">
            {/* Filter by price range here */}
            <h3 style={{marginLeft: '10px', marginBottom: '5px', color: '#444', fontWeight: 500, fontFamily: 'Poppins'}}>Filter by price range</h3>
            <div className="pricesSlider">
                <input
                onChange={(e) => setMinPrice(e.target.value)}
                type="number"
                className="pricesField"
                placeholder="Min price ($) ...."
                min="0"
                max="10000"
                />
                <input
                onChange={(e) => setMaxPrice(e.target.value)}
                type="number"
                className="pricesField"
                placeholder="Max price ($) ...."
                min="0"
                max="10000"
                />
                
                {minPrice === '0' || maxPrice === '10000' ? <button className="priceFilterBtn2" disabled>Filter Now</button> :<button className="priceFilterBtn" onClick={handleFilterProductsByPrices}>Filter Now</button>}
            </div> <br />  <br />
            {/* Categories of products */}
            <h3 style={{marginLeft: '10px', marginBottom: '5px', color: '#444', fontWeight: 500, fontFamily: 'Poppins'}}>Categories</h3>
            {loading ? <div style={{ textAlign: 'center'}}><CircularProgress size={24}  mt={5} color="secondary" /></div> : <>{categoriesArr.map(category => <><Radio
                style={{
                margin: '5px 8px',
                color: 'rgb(222 77 247)', 
                fontWeight: 500
                }}
                checked={selectedCategory === category}
                onChange={handleChangeCategory}
                value={category}
                name="radio-buttons"
                inputProps={{ 'aria-label': category }}
            /> <span style={{fontFamily: 'Poppins', fontWeight: 600}}>{category.toUpperCase()} CATEGORY </span><br /></>)}</>}
            <br /> <br />
            {/* Sizes of products */}
            <h3 style={{marginLeft: '10px', marginBottom: '5px', color: '#444', fontWeight: 500, fontFamily: 'Poppins'}}>Sizes</h3>
            {loading ? <div style={{ textAlign: 'center'}}><CircularProgress size={24}  mt={5} color="secondary" /></div> : <>{sizesArr.map(size => <><Radio
                style={{
                margin: '5px 8px',
                color: 'rgb(222 77 247)', 
                fontWeight: 500
                }}
                checked={selectedSize === size}
                onChange={handleChangeSizes}
                value={size}
                name="radio-buttons"
                inputProps={{ 'aria-label': size }}
            /> <span style={{fontFamily: 'Poppins', fontWeight: 600}}>"{size.toUpperCase()}" SIZE</span><br /></>)}</>}
        </div>

    );
};

export default Sidebar;