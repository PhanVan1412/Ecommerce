import React from 'react';
import Ddata from './Ddata';
import Slider from "react-slick";

const DCard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <>
        <Slider {...settings}>
            {
                Ddata.map((value, index) => {
                    return (
                        <div className="box product" key={index}>
                            <div className="img">
                                <img src={value.cover} alt="" />
                            </div>
                            <div className="content">
                                <h1>{value.name}</h1>
                                <span>{value.price}</span>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    </>
  )
}

export default DCard;