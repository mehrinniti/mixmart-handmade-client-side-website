import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>Mixmart<span> Handmade</span></h3>

                    <p className="footer-links">
                        <small className="link-1">Home</small>
                        <small>Blog</small>
                        <small>Pricing</small>
                        <small>About</small>
                        <small>Contact</small>
                    </p>

                    <p className="footer-company-name">© 2021 || Design & Developed By Niti</p>
                </div>

                <div className="footer-center">
                    <div>
                        <p><span>Dhaka Bangladesh</span> Godenail, Narayanganj</p>
                    </div>

                    <div>
                        <p>+01930000000</p>
                    </div>

                    <div>
                        <p><a href="mailto:supportfoodelix@company.com">support@mixmart.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>Our Website</span>
                        We promise we’ll get back to you promptly– your gifting needs are always on our minds!
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;