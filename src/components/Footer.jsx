import React from "react";
import './Footer.css';
import logo from './images/D.png';

const Footer = () => {
    return (
        <>
            <div className="banner-wrap">
                <div className="banner-content">
                    <div className="footer-text1">
                        <div className="mail">
                            <h4>Squirrel NFT</h4>
                            <p className="email"><i class="fa-solid fa-envelope"></i>squirrel@sq.com</p>
                        </div>
                    </div>
                    <div className="footer-text2">
                        <div className="footer2">
                            <h5>Get More Updates Here</h5>
                            <div className="hr"></div>
                            <div className="social">
                                <a href="#" target="blank" className="brands-link"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#" target="blank" className="brands-link"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#" target="blank" className="brands-link"><i class="fa-brands fa-discord"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-container">
                <div className="footer-end">
                    <img src={logo} className="footer-logo"/>
                    <p className="copyright">2023 Squirrel. All Rights Reserved.</p>
                </div>

            </div>
        </>
    )
}

export default Footer;