import React from 'react';
import carfted from '../../../images/crafted.png'
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <div className="display-title">
                <div className="banner-title">
                    <img src={carfted} alt="" />
                    <div className="title">
                        <h1 style={{ fontSize: "50px", fontWeight: "500" }}><span style={{ color: "#e2aaa1" }}>Contour </span>Planter <br /> Collection  </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;