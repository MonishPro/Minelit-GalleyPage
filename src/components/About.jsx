import React from "react";
import './css/About.css';

import img1 from "./images/card5.png"
import img2 from "./images/card7.png"
import img3 from "./images/card2.png"
import path from "./images/about-path.png"
import Footer from "./Footer";

const About = () => {
    return (
        <>
            <div className="container-about">
                <div className="rectangle">
                    <h1 className="about-door">DOOR DUNES</h1>
                    <div className="about-right">
                        <img src={img1} className="about-rectangle-img about-img1" />
                        <img src={img2} className="about-rectangle-img about-img2" />
                        <img src={img3} className="about-rectangle-img about-img3" />
                    </div>
                </div>
                <div className="rectangle1"></div>
                <div className="rectangle2"></div>
                <div className="rectangle3"></div>
                <div className="about-door-verse-left">
                    <h3 className="door-title">What is <br></br>DOOR DUNES?</h3>
                    <p className="door-text">
                        DOOR DUNES is a one-of-a-kind and distinctive piece of digital art collection that is offered for sale in OpenSea Marketplace as a non-fungible token (NFT) created on the Ethereum Blockchain. This collection of Doors is jointly developed by AI and Human. Recently, the market has been buzzing with generative AI art, so we decided to create a collection by combining AI and our artistic talent.
                    </p>
                </div>
                <div className="about-door-verse-right">
                    <h3 className="door-title">THE SPECS</h3>
                    <p className="door-text">
                        Every NFT door has a distinct set of specs and is a one-of-a-kind digital asset.
                        Each NFT is genuinely unique due to the colour, size, form, and style of the door. While some doors may open to hidden treasures or secret chambers, others may lead to breathtaking landscapes. NFTs based on doors are not just limited to their physical specifications, but also offer boundless opportunities for creativity. Imagine a world where doors can be portals to infinite possibilities, limited only by the imagination of their creators.
                    </p>
                </div>
                <div className="animation-path">
                    <img src={path} className="path_div" alt="Can't Load"/>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default About;