import React from 'react';
import './Discount.css';

const Discount = () => {
    return (
        <div className="discount-container">
            <div className="discount">
                <h1 className="discount-details">Discount for all orders over $100</h1>
                <h2 className="discount-details">We're at 71% of our goal!</h2>
                <p className="discount-details">That’s $56,715.00 USD pledged of our $79,600.00 USD target! <br /> Estimated delivery: April 14-24</p>
            </div>
            <div>
                <button className="discount-btn">View More</button>
            </div>
        </div>
    );
};

export default Discount;