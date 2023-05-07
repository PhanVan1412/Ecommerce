import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';


const Search = () => {
    window.addEventListener('scroll', function() {
        const saerch = this.document.querySelector(".search");
        saerch.classList.toggle("active", window.scrollY > 100)
    })
  return (
   <>
    <section className="search">
        <div className="container c_flex">
            <div className="logo width">
                <img src={logo} alt="" />
            </div>
            <div className="search-box f_flex">
                <i className="fa fa-search"></i>
                <input type="text" placeholder='Tìm kiếm sản phẩm bạn cần' />
                <span>All Category</span>
            </div>

            <div className="icon f_flex width">
                <i className="fa fa-user icon-circle"></i>
                <div className="cart">
                    <Link to="/cart"><i className="fa fa-shopping-bag icon-circle"></i></Link>
                    <span>0</span>
                </div>
             </div>
        </div>
    </section>
   </>
  )
}

export default Search;