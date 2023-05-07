import React from 'react';
import './Style.css';
import Cart from './Cart';

const NewArrials = () => {
  return (
    <>
        <section className="new-arrials background">
            <div className="container">
              <div className="heading d_flex">
                <div className="heading-left row f_flex">
                    <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' alt=""/>
                    <h2>New Arrials</h2>
                </div>
                <div className="heading-right row f_flex">
                    <span>View all</span>
                    <i className="fa-solid fa-caret-right"></i>
                </div>
              </div>
              <Cart />
            </div>
        </section>
    </>
  )
}

export default NewArrials