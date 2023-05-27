import React from "react";
import './css/Homepage.css';

import img4 from "./part1images/door2.png"
import img2 from "./part1images/door3.png"
import img1 from "./part1images/door1.png"
import img6 from "./gridimages/seashellsdoor.png"
import img7 from "./gridimages/Ancient.png"
import img8 from "./gridimages/Space.png"
import img9 from "./images/door11.png"
import logo from "./part1images/D2.png"

const Homepage = () => {
    return (
        <>
            <div className="container-fluid herosection">
                <div className="herotext" >
                    <h2 className="knock">KNOCK</h2>
                    <h2 className="knock">KNOCK</h2>
                    <h2 className="there">WHO'S THERE?</h2>
                </div>
            </div>
            <div className="container herowelcome" >
                <h3 className="herowelcome-text">WELCOME TO THE</h3>
                <h3 className="herowelcome-text">DOOR DUNES</h3>
                <p className="herowelcome-desc">Welcome to Door Dunes, where art and doors converge in a captivating collection of NFTs. Step into a world where the ordinary becomes exceptional, as we explore the artistic dimensions of doors through digital masterpieces. The Door Dunes is a place where art and doors intertwine in a realm of boundless creativity.</p>
            </div>
            <div className="tilt-images" >
                <img src={img2} className="image-style image1" alt="img" />
            </div>
            <div className="tilt-images-two" >
                <img src={img4}  className="image-style image2" alt="img"/>
                <img src={img1} className="image-style image3" alt="img" />
            </div>
            <div className="nftcollection">
                <div className="nft-open-text" >
                    <div className="nft-text">Open the Door <br></br>to the NFT Collection</div>
                    <a className="nft-btn" href="https://opensea.io/">March to OpenSea</a>
                </div>
                <div className="door-img-right" >
                    <img src={img6} alt="door" className="door6" />
                </div>
            </div>
            <div className="chapter-homepage">
                <h3 className="chapters-title">Chapters</h3>
                <div className="display-home-chapter">
                    <img src={img7} className="chapter-images-home" alt="chapters" />
                    <img src={img8} className="chapter-images-home" alt="chapters" />
                    <img src={img9} className="chapter-images-home" alt="chapters" />
                </div>
                <p className="chapter-home-desc" >As you explore Door Dunes, remember that behind every door lies a story waiting to be discovered. Therefore, we divided the entire NFT collection into various chapters. Each chapter has a distinct NFT door collection of its own.</p>
                <div className="btn-chapter">
                <a className="explore-btn" href="/chapters" >Explore All Chapters <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            {/* Footer */}
            <div className="banner-wrap">
                    <div className="banner-content">
                        <div className="footer-text1">
                            <div className="mail">
                                <h4>Door Dunes</h4>
                                <p className="email"><i class="fa-solid fa-envelope"></i>nft@doordunes.com</p>
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
                        <img src={logo} className="footer-logo-about" />
                        <p className="copyright">2023 Door Dunes. All Rights Reserved.</p>
                    </div>

                </div>
        </>
    )
}
export default Homepage;