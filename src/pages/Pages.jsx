import React from 'react';
import Home from '../components/mainpage/Home';
import FlashDeals from '../components/flashDeals/FlashDeals';
import TopCate from '../components/top/TopCate';
import NewArrials from '../components/newarrivals/NewArrials';
import Discount from '../components/Discount/Discount';
import Shop from '../components/Shops/Shop';
import Annocument from '../components/Annocument/Annocument';
import Wrapper from '../components/Wrapper/Wrapper';

const Pages = ({ productItems, shopItems }) => {
  return (
    <>
        <Home />
        <FlashDeals productItems={productItems}/>
        <TopCate />
        <NewArrials />
        <Discount />
        <Shop shopItems={shopItems}/>
        <Annocument />
        <Wrapper />
    </>
  )
}

export default Pages;