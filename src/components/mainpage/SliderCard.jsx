import React from 'react';
import Sdata from './Sdata';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderCard = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  return (
    <>
      <Slider {...settings}>
      {
        Sdata.map((value, i) => {
          return (
            <div className="box d_flex top" key={i}  style={{display: "flex"}}>
              <div className="left">
                <h1>{value.title}</h1>
                <p>{value.desc}</p>
                <button className="btn btn-primary">Visit Collections</button>
              </div>
              <div className="right">
                <img src={value.cover} alt="" />
              </div> 
          </div>
          )
        })
      }</Slider>
    </>
    )
  }

export default SliderCard;