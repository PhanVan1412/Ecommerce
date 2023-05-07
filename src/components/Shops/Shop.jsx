import React from 'react';
import ShopCart from "./ShopCart";
import './Shop.css';
import Catg from './Catg';


const Shop = ({ shopItems }) => {
  return (
    <>
        <section className="shop background">
            <div className="container d_flex">
                <Catg />
                
                <div className='contentWidth'>
                    <div className='heading d_flex'>
                        <div className='heading-left row  f_flex'>
                            <h2>Mobile Phones</h2>
                        </div>
                        <div className='heading-right row '>
                            <span>View all</span>
                            <i className='fa-solid fa-caret-right'></i>
                        </div>
                    </div>
                    <div className='product-content  grid1'>
                        <ShopCart shopItems={shopItems} />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Shop;