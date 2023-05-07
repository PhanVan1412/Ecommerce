import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {

    const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
        <header className="header">
            <div className="container d_flex">
                <div className="categories d_flex">
                    <span className="fa-solid fa-border-all"></span>
                    <h4>Categories <i className="fa fa-chevron-down"></i></h4>
                </div>
                <div className="navlink">
                    <ul className={MobileMenu ? "nav-links-mobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                        <li><Link to="/"></Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/user">Shop</Link></li>
                        <li><Link to="/vendor">cart</Link></li>
                        <li><Link to="/track">track my order</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                    </ul>
                    <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                        {MobileMenu ? <i className="fas fa-times close home-btn"></i> : <i className="fa-solid fa-xmark open"></i>}
                    </button>
                </div>
            </div>
            <Outlet />
        </header>
    </>
  )
}

export default Navbar;