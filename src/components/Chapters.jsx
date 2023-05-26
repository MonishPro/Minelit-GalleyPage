import React from "react";
import {NavLink} from 'react-router-dom';

import './css/Chapters.css';
import Footer from './Footer';
import chapter1 from './images/chapter1.png';
import chapter3 from './images/chapter3.png';
import mint from './images/mint.png';
import img1 from './images/card2.png';
import img3 from './images/card4.png';
import chapter4 from './images/chapter4.png';
import Coming from './images/Coming.png';

const Chapters = () => {
    return (
        <>
            <div className="container-fluid chapter">
                <h3 > Chapters</h3>
                <div className="timeline_col">
                    <div className="timeline_row">
                        <img src={chapter1} className="chapter_img"/>
                        <div className="barh barh1"><div className="innerh"></div></div>
                        <div className="barv barv1"><div className="innerv"></div></div>
                        <img src={chapter3} className="chapter_img" />
                    </div>
                    <div className="timeline_row">
                        <img src={Coming} className="chapter_imgg" />
                        <div className="barh barh2"><div className="innerh"></div></div>
                        {/* <div className="barv barv2"><div className="innerv"></div></div> */}
                        <img src={chapter4} className="chapter_img" />
                    </div>
                    {/* <div className="timeline_row">
                        <img src={chapter1} className="chapter_img" />
                        <div className="barh barh3"><div className="innerh"></div></div>
                        <div className="barv barv3"><div className="innerv"></div></div>
                        <img src={chapter3} className="chapter_img" />
                    </div>
                    <div className="timeline_row">
                        <img src={chapter3} className="chapter_img" />
                        <div className="barh bar4"><div className="innerh"></div></div>
                        <div className="barv barv4"><div className="innerv"></div></div>
                        <img src={chapter1} v className="chapter_img" />
                    </div>
                    <div className="timeline_row">
                        <img src={chapter1} className="chapter_img" />
                        <div className="barh barh5"><div className="innerh"></div></div>
                        <div className="barv barv5"><div className="innerv"></div></div>
                        <img src={chapter3} className="chapter_img" />
                    </div>
                    <div className="timeline_row">
                        <img src={chapter1} className="chapter_img" />
                        <div className="barh barh6"><div className="innerh"></div></div>
                        <img src={chapter3} className="chapter_img" />
                    </div> */}
                </div>
                <div className="content1">
                    <h2 className="heading-chapter" >Chapters? Seems Interesting!</h2>
                    <p >
                        The Door Dunes NFT collection is divided into chapters to allow for a deeper exploration of the universe. Each chapter in the Door Dunes NFT collection has its own unique collection and story. It is being released in stages, with different launch dates for each chapter. It is a stunning example of digital art and storytelling, each with its own unique collection.
                    </p>
                </div>
                {/* <div className="line"></div>
                <div className="minting">
                    <p className="minting_text" <img className="mint_img" src={mint} alt="Image" />Minting Now</p>
                </div>
                <div className="minting_info">
                    <div className="mint_display">
                        <img alt="image" className="mint_display_img" src={img1} >
                        <img alt="image" className="mint_display_img1" src={chapter1} />
                        <img alt="image" className="mint_display_img" src={img3} >
                    </div>
                    <div className="mint_display_text">
                        <div className="mint_heading" 
                            <div>Ancient</div>
                            <div className="total">Total Doors - 50</div></div>
                            <NavLink className='mint_button' to='/ancient'>Know The Story<i class="fa-solid fa-arrow-right"></i></NavLink>
                    </div>
                </div> */}
            </div>
            <Footer mail = 'dvofficial@doorversenft.com'/>
        </>
    )
}

export default Chapters;